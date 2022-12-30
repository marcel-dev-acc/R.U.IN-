import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {Text, Avatar} from 'react-native-paper';

import colours from '../../constants/colours';
import fontSizes from '../../constants/fontSizes';
import {Button} from '../../components';
import {authStore} from '../../state/store';
import {AUTH_ACTION_TYPES} from '../../state/constants';
import {fetchAuth, removeAuth} from '../../services/store.auth.service';

type HomeScreenProps = {
  navigation: any;
};

/**
 * Home / Welcome screen
 *
 * Used to buffer the data for the app,
 * can also hold the login / registration
 * functionality.
 */
const HomeScreen = ({
  navigation
}: HomeScreenProps) => {

  const handleLogin = () => {
    navigation.navigate('login');
  };

  const handleAuthCheck = async () => {
    const localResponse = await fetchAuth();
    if (localResponse.ok) {
      authStore.dispatch({
        type: AUTH_ACTION_TYPES.AUTH_REMOVED,
        username: localResponse.data?.username,
      });
      authStore.dispatch({
        type: AUTH_ACTION_TYPES.AUTH_ADDED,
        authData: {
          username: localResponse.data?.username,
          token: localResponse.data?.token,
          expiry: localResponse.data?.expiry,
        }
      });
      setAuthenticated(true);
      navigation.navigate('messages');
    } else {
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (!authenticated) {
      handleAuthCheck();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <SafeAreaView style={styles.homeContainer}>
      {!loading && (
        <View>
          <Text style={styles.homeText}>
            R.U.IN?
          </Text>
          <Text style={styles.homeTextSmall}>
            Are you in the Secret Club?
          </Text>
        </View>
      )}
      <Avatar.Icon
        size={175}
        color='white'
        icon='eye'
        style={styles.homeLogo}
      />
      {!loading && (
        <Button
          text='Shake hands'
          buttonColour={colours.WHITE}
          textColour={colours.BLACK}
          textSize={fontSizes.LARGE}
          onPress={handleLogin}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.BLACK,
  },
  homeText: {
    color: colours.WHITE,
    fontSize: fontSizes.LARGE,
  },
  homeTextSmall: {
    color: colours.WHITE,
    fontSize: fontSizes.MEDIUM,
    fontStyle: 'italic',
  },
  homeLogo: {
    backgroundColor: colours.BLACK,
  },
});

export default HomeScreen;
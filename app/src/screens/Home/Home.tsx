import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Text, Avatar} from 'react-native-paper';

import colours from '../../constants/colours';
import fontSizes from '../../constants/fontSizes';
import { Button } from '../../components';

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

  return (
    <SafeAreaView style={styles.homeContainer}>
      <Text style={styles.homeText}>
        R.U.IN?
      </Text>
      <Text style={styles.homeTextSmall}>
        Are you in the Secret Club?
      </Text>
      <Avatar.Icon
        size={200}
        color='white'
        icon='eye'
        style={styles.homeLogo}
      />
      <Button
        text='Shake hands'
        buttonColour={colours.WHITE}
        textColour={colours.BLACK}
        textSize={fontSizes.LARGE}
        onPress={handleLogin}
      />
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
import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {
  Text,
  TextInput,
  Card,
  Paragraph,
  Button as PaperButton
} from 'react-native-paper';

import colours from '../../constants/colours';
import fontSizes from '../../constants/fontSizes';
import {Button} from '../../components';
import {authenticateUser} from '../../services/api.auth.service';
import {authStore} from '../../state/store';
import {AUTH_ACTION_TYPES} from '../../state/constants';
import {storeAuth, removeAuth} from '../../services/store.auth.service';

type LoginScreenProps = {
  navigation: any;
};

/**
 * Login screen
 *
 * Give the user the ability to entry their username
 * and password
 */
const LoginScreen = ({
  navigation
}: LoginScreenProps) => {

  const handleLogin = async () => {
    setLoading(true);
    // Validate inputs
    if (!username || !password) {
      setError('Username or password cannot be blank');
      setLoading(false);
      return;
    }
    // Make login request
    const response = await authenticateUser(username, password);
    if (response.ok) {
      authStore.dispatch({
        type: AUTH_ACTION_TYPES.AUTH_REMOVED,
        username: username,
      });
      authStore.dispatch({
        type: AUTH_ACTION_TYPES.AUTH_ADDED,
        authData: {
          username: username,
          token: response.data.token,
          expiry: response.data.expiry,
        }
      });
      const localResponse = await storeAuth({
        username: username,
        password: password,
        token: response.data.token,
        expiry: response.data.expiry,
      });
      if (!localResponse.ok) {
        setError(localResponse.message);
        return;
      }
      navigation.navigate('messages');
    } else {
      setError(response.data);
    }
    setLoading(false);
  };

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <SafeAreaView style={styles.loginContainer}>
      <View style={styles.inputContainer}>  
        <TextInput
          label={
            <Text
              style={styles.inputLabel}
            >
              Username
            </Text>
          }
          mode='outlined'
          selectionColor={colours.LIGHT_BLUE}
          placeholderTextColor={colours.WHITE}
          outlineColor={colours.WHITE}
          activeOutlineColor={colours.WHITE}
          textColor={colours.WHITE}
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          label={
            <Text
              style={styles.inputLabel}
            >
              Password
            </Text>
          }
          secureTextEntry={true}
          mode='outlined'
          selectionColor={colours.LIGHT_BLUE}
          placeholderTextColor={colours.WHITE}
          outlineColor={colours.WHITE}
          activeOutlineColor={colours.WHITE}
          textColor={colours.WHITE}
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button
        loading={loading}
        text='Give password'
        buttonColour={colours.WHITE}
        textColour={colours.BLACK}
        textSize={fontSizes.LARGE}
        onPress={handleLogin}
      />
      {error && (
        <View style={styles.errorContainer}>
          <Card style={styles.errorCard}>
            <Card.Content>
              <Paragraph style={styles.errorText}>
                {error}
              </Paragraph>
              <PaperButton
                textColor={colours.WHITE}
                buttonColor={colours.LIGHT_RED}
                style={styles.errorButton}
                onPress={() => setError('')}
              >
                Understood
              </PaperButton>
            </Card.Content>
          </Card>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.BLACK_BLUE,
  },
  inputContainer: {
    margin: 25,
  },
  input: {
    backgroundColor: colours.BLACK_BLUE,
    minWidth: 200,
    margin: 10,
  },
  inputLabel: {
    color: colours.WHITE,
    backgroundColor: colours.BLACK_BLUE,
  },
  errorContainer: {
    margin: 25,
  },
  errorCard: {
    backgroundColor: colours.DARK_RED,
    maxWidth: 300,
  },
  errorText: {
    color: colours.WHITE,
    fontSize: fontSizes.MEDIUM,
    marginBottom: 10,
  },
  errorButton: {
    alignSelf: 'flex-end',
    borderRadius: 5,
    width: 100,
    padding: 0,
  },
});

export default LoginScreen;
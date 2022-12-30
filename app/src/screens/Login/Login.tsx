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
    // Validate inputs

    // Make login request
    const response = await authenticateUser(username, password);
    console.log(response);
    if (response.ok) {

    } else {
      setError(response.data);
    }
  };

  const [loading, setLoading] = useState('');
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
    backgroundColor: colours.BLACK,
  },
  inputContainer: {
    margin: 25,
  },
  input: {
    backgroundColor: colours.BLACK,
    minWidth: 200,
    margin: 10,
  },
  inputLabel: {
    color: colours.WHITE,
    backgroundColor: colours.BLACK,
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
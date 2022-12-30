import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colours from './src/constants/colours';
import {
  HomeScreen,
  LoginScreen,
  MessagesScreen,
  MessageScreen,
} from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='home'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name='home'
          component={HomeScreen}
        />
        <Stack.Screen
          name='login'
          component={LoginScreen}
        />
        <Stack.Screen
          name='messages'
          component={MessagesScreen}
        />
        <Stack.Screen
          name='message'
          component={MessageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colours.BLACK,
  },
});

export default App;

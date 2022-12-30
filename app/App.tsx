import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colours from './src/constants/colours';
import {
  HomeScreen,
  MessageScreen,
} from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <SafeAreaView style={styles.appContainer}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Message"
            component={MessageScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
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

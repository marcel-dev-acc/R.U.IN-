import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import colours from './src/constants/colours';
import {
  HomeScreen,
  MessageScreen,
} from './src/screens';

const App = () => {

  return (
    <SafeAreaView style={styles.appContainer}>
      <MessageScreen />
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

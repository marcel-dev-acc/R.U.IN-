import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import colours from './src/constants/colours';

const App = () => {

  return (
    <SafeAreaView style={styles.appContainer}>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colours.BLACK,
  },
});

export default App;

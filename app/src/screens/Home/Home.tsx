import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

import colours from '../../constants/colours';
import fontSizes from '../../constants/fontSizes';
import { Button } from '../../components';

type HomeScreenProps = {
};

/**
 * Home / Welcome screen
 *
 * Used to buffer the data for the app,
 * can also hold the login / registration
 * functionality.
 */
const HomeScreen = ({}: HomeScreenProps) => {

  const handleLogin = () => {

  };

  return (
    <SafeAreaView style={styles.homeContainer}>
      <Text style={{
        color: 'white',
      }}>App here</Text>
      <Button
        text='Login'
        buttonColour={colours.LIGHT_BLUE}
        textColour={colours.BLACK}
        textSize={fontSizes.LARGE}
        onPress={() => {}}
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
    borderWidth: 1,
    borderColor: colours.RED,
    backgroundColor: colours.BLACK,
  },
  homeText: {
    color: colours.BLACK,
  },
});

export default HomeScreen;
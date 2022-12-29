import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

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

  return (
    <View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeLoader: {
    marginTop: 20,
    marginBottom: 20,
  },
  homeText: {
    alignSelf: 'center',
    color: 'rgba(0, 0, 0, 1)',
  },
});

export default HomeScreen;
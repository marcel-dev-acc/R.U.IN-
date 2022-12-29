import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

type MessageScreenProps = {
};

/**
 * Message screen
 *
 * Used to display and send messages / chat between users
 */
const MessageScreen = ({}: MessageScreenProps) => {

  return (
    <View style={styles.messagingContainer}>
    </View>
  );
};

const styles = StyleSheet.create({
  messagingContainer: {
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

export default MessageScreen;
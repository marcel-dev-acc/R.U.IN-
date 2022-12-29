import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colours from '../../constants/colours';
import fontSizes from '../../constants/fontSizes';

type MessageItemProps = {
  fileDate: number;
  messageId: number;
  mesageConnectId: string;
  messageBody: MessageProps;
  createdAt: number;
  receivedAt: number;
  readAt: number;
};

type MessageProps = {
  body: string;
  image: string;
};

/**
 * Message item
 *
 * Used to render a message item as a card
 */
const MessageItem = ({
  fileDate,
  messageId,
  mesageConnectId,
  messageBody,
  createdAt,
  receivedAt,
  readAt,
}: MessageItemProps) => {

  return (
    <View style={styles.messageItemContainer}>
      <Text style={styles.messageText}>{messageBody.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageItemContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colours.RED,
  },
  messageText: {
    color: colours.WHITE,
  },
});

export default MessageItem;
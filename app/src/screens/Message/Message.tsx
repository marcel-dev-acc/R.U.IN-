import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, TextInput} from 'react-native';

import colours from '../../constants/colours';
import fontSizes from '../../constants/fontSizes';

import { MessageItem } from '../../components';
import { fetchMessages } from '../../services/api.messages.service';

type MessageScreenProps = {
};

type MessageProps = {

};

/**
 * Message screen
 *
 * Used to display and send messages / chat between users
 */
const MessageScreen = ({}: MessageScreenProps) => {

  const handleFetchMessages = async () => {
    setLoading(true);
    const response = await fetchMessages(
      '413aa067-7328-4c76-a518-a92f51e4ec22',
      1672158398000,
      1672331267000,
      'marcel:test'
    );
    if (response.ok) {
      setMessages(response.data);
    }
    setLoading(false);
  };

  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (messages.length === 0) handleFetchMessages();
  }, []);

  const messageItem = ({item}: any) => {
    const [fileDate, messageId, mesageConnectId, messageBody, createdAt, receivedAt, readAt] = item;
    return (
      <MessageItem
        fileDate={fileDate}
        messageId={messageId}
        mesageConnectId={mesageConnectId}
        messageBody={messageBody}
        createdAt={createdAt}
        receivedAt={receivedAt}
        readAt={readAt}
      />
    );
  };

  return (
    <View style={styles.messagingContainer}>
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>Hello world</Text>
      </View>
      <FlatList
        style={styles.messageList}
        data={messages}
        renderItem={messageItem}
      />
      <View style={styles.messageInputContainer}>
        <TextInput
          multiline={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messagingContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colours.RED,
  },
  headerSection: {
    backgroundColor: colours.DARK_BLUE,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colours.RED,
    padding: 15,
  },
  headerText: {
    alignSelf: 'flex-start',
    color: colours.WHITE,
    fontSize: fontSizes.LARGE,
  },
  messageList: {
    flex: 1,
    width: '100%',
  },
  messageInputContainer: {
    padding: 5,
    width: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colours.RED,
    // borderRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: colours.WHITE,
  },
});

export default MessageScreen;
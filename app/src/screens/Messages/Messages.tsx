import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, FlatList,} from 'react-native';
import {Text, Avatar} from 'react-native-paper';

import colours from '../../constants/colours';
import fontSizes from '../../constants/fontSizes';
import {BondItem} from '../../components';

type MessagesScreenProps = {
  navigation: any;
};

/**
 * Messages screen
 *
 * The messages screen holds the relationships between
 * the given user and his/her bonds
 */
const MessagesScreen = ({
  navigation
}: MessagesScreenProps) => {

  const bonds = [
    'test',
    'test2',
    'test3',
  ];

  const bondItem = ({item}: any) => {
    // const [fileDate, messageId, mesageConnectId, messageBody, createdAt, receivedAt, readAt] = item;
    return (
      <BondItem bond={item} />
    );
  };

  return (
    <SafeAreaView style={styles.messagesContainer}>
      <FlatList
        style={styles.bondsList}
        data={bonds}
        renderItem={bondItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  messagesContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.BLACK,
  },
  bondsList: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default MessagesScreen;
import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import colours from '../../constants/colours';
import fontSizes from '../../constants/fontSizes';

type BondItemProps = {
  bond: string;
};

/**
 * Bond item
 *
 * Used to render a message item as a card
 */
const MessageItem = ({
  bond,
}: BondItemProps) => {

  return (
    <View style={styles.bondItemContainer}>
      <Card style={styles.bondCard}>
        <Card.Content>
          <Title
            style={styles.bondText}
          >
            {bond}
          </Title>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  bondItemContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bondCard: {
    width: '100%',
    borderRadius: 0,
    backgroundColor: colours.BLACK_BLUE,
    borderBottomWidth: 1,
    borderBottomColor: colours.WHITE,
  },
  bondText: {
    color: colours.WHITE,
  },
});

export default MessageItem;
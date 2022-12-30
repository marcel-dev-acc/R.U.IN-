import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';

import colours from '../../constants/colours';

type ButtonProps = {
  text: string;
  buttonColour: string;
  textColour: string;
  textSize: number;
  onPress: any;
};

/**
 * Button
 */
const Button = ({
  text,
  buttonColour,
  textColour,
  textSize,
  onPress,
}: ButtonProps) => {

  return (
    <TouchableRipple
      onPress={onPress}
      rippleColor="rgba(0, 0, 0, .32)"
      style={[styles.buttonContainer, {
        backgroundColor: buttonColour,
      }]}
    >
      <Text
        style={[styles.buttonText, {
          color: textColour,
          fontSize: textSize,
        }]}
      >{text}</Text>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    minWidth: 100,
  },
  buttonText: {
  },
});

export default Button;
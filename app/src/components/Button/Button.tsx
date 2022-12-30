import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, TouchableRipple, ActivityIndicator} from 'react-native-paper';

import colours from '../../constants/colours';

type ButtonProps = {
  loading?: boolean;
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
  loading,
  text,
  buttonColour,
  textColour,
  textSize,
  onPress,
}: ButtonProps) => {

  const handlePress = () => {
    if (!loading) onPress();
  };

  return (
    <TouchableRipple
      onPress={handlePress}
      rippleColor="rgba(0, 0, 0, .32)"
      style={[styles.buttonContainer, {
        backgroundColor: loading ? colours.LIGHT_GREY : buttonColour,
      }]}
    >
      <View>
        {!loading && (
          <Text
            style={[styles.buttonText, {
              color: textColour,
              fontSize: textSize,
            }]}
          >{text}</Text>
        )}
        {loading && (
          <ActivityIndicator
            animating={true}
            color={colours.BLACK}
          />
        )}
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    minWidth: 200,
  },
  buttonText: {
  },
});

export default Button;
import React from 'react';
import {StyleSheet} from 'react-native';

export const EnterPinStyles = StyleSheet.create({
  PinCodeContainer: {backgroundColor: 'white'},
  PinCodeHeaderContainer: {alignItems: 'center'},
  PinCodeHeaderText: {color: 'black', fontSize: 16},
  PinCodeNumberStyle: {
    width: 80,
    height: 80,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  PinCodeTextStyle: {
    color: '#9B9B9B',
    fontSize: 26,
  },
  PinCodeButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  PinCodeDisplayStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
});

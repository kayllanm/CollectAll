import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {HStack} from '@react-native-material/core';

import Delete from './assets/delete.svg';
import {getLocation} from '../Utils/Utilities';
import {EnterPinStyles} from './EnterPinStyle';

const EnterPinView = props => {
  const {navigation} = props;
  const {
    PinCodeNumberStyle,
    PinCodeContainer,
    PinCodeHeaderContainer,
    PinCodeHeaderText,
    PinCodeButtonContainer,
    PinCodeTextStyle,
    PinCodeDisplayStyle,
  } = EnterPinStyles;

  const [pinCode, setPinCode] = useState(['', '', '', '']);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
    if (count === 4) {
      if (pinCode.join('') === '1111') {
        navigation.navigate('Home');
      }
    }
  }, [count]);

  const onPressNumber = num => {
    let tempCode = [...pinCode];
    for (var i = 0; i < tempCode.length; i++) {
      if (tempCode[i] == '') {
        tempCode[i] = num;
        break;
      } else {
        continue;
      }
    }
    setPinCode(tempCode);
    setCount(count + 1);
  };

  const onPressBack = num => {
    let tempCode = [...pinCode];
    for (var i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] != '') {
        tempCode[i] = '';
        break;
      } else {
        continue;
      }
    }
    setPinCode(tempCode);
  };

  return (
    <SafeAreaView>
      {getLocation()}
      <View style={PinCodeContainer}>
        <View style={PinCodeHeaderContainer}>
          <Text style={PinCodeHeaderText}>Enter Your Pin</Text>
        </View>
        <View style={PinCodeDisplayStyle}>
          <Text>{pinCode.join(' ')} </Text>
        </View>
        <View style={PinCodeButtonContainer}>
          <HStack m={16} spacing={16}>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => {
                onPressNumber(1);
              }}>
              <Text style={PinCodeTextStyle}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => {
                onPressNumber(2);
              }}>
              <Text style={PinCodeTextStyle}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => {
                onPressNumber(3);
              }}>
              <Text style={PinCodeTextStyle}>3</Text>
            </TouchableOpacity>
          </HStack>
          <HStack m={16} spacing={16}>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => {
                onPressNumber(4);
              }}>
              <Text style={PinCodeTextStyle}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => {
                onPressNumber(5);
              }}>
              <Text style={PinCodeTextStyle}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => {
                onPressNumber(6);
              }}>
              <Text style={PinCodeTextStyle}>6</Text>
            </TouchableOpacity>
          </HStack>
          <HStack m={16} spacing={16}>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => {
                onPressNumber(7);
              }}>
              <Text style={PinCodeTextStyle}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => {
                onPressNumber(8);
              }}>
              <Text style={PinCodeTextStyle}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => {
                onPressNumber(9);
              }}>
              <Text style={PinCodeTextStyle}>9</Text>
            </TouchableOpacity>
          </HStack>
          <HStack m={16} spacing={16}>
            <TouchableOpacity
              style={{
                width: 80,
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: 14, textAlign: 'center'}}>
                Forgot Passcode
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => {
                onPressNumber(0);
              }}>
              <Text style={PinCodeTextStyle}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => {
                onPressBack();
              }}>
              <Delete height={30} width={30} />
            </TouchableOpacity>
          </HStack>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EnterPinView;

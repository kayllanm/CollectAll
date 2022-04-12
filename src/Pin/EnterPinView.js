import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, TouchableOpacity} from 'react-native';
import {Title, Button, Text} from 'react-native-paper';

import Delete from '../assets/delete.svg';
import {getLocation} from '../Utils/Utilities';
import {EnterPinStyles} from './EnterPinStyle';

const EnterPinView = props => {
  const {navigation} = props;
  const {
    PinCodeNumberStyle,
    PinCodeContainer,
    PinCodeHeaderContainer,
    PinCodeButtonContainer,
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
    <SafeAreaView style={PinCodeContainer}>
      {getLocation()}
      <View>
        <View style={PinCodeHeaderContainer}>
          <Title style={{color: 'black'}}>Enter Your Pin</Title>
        </View>
        <View style={PinCodeDisplayStyle}>
          <Text style={{color: 'black'}}>{pinCode.join(' ')} </Text>
        </View>
        <View style={PinCodeButtonContainer}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(1)}>
              <Text style={{color: '#000'}}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(2)}>
              <Text style={{color: '#000'}}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(3)}>
              <Text style={{color: '#000'}}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(4)}>
              <Text style={{color: '#000'}}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(5)}>
              <Text style={{color: '#000'}}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(6)}>
              <Text style={{color: '#000'}}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(7)}>
              <Text style={{color: '#000'}}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(8)}>
              <Text style={{color: '#000'}}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(9)}>
              <Text style={{color: '#000'}}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{paddingLeft: 8, width: 100, justifyContent: 'center'}}
              onPress={() => console.log('go to forgot passcode screen')}>
              <Text style={{color: '#000', textAlign: 'center'}}>
                Forgot Passcode
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(0)}>
              <Text style={{color: '#000'}}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressBack()}>
              <Delete height={30} width={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EnterPinView;

import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text, Title} from 'react-native-paper';
import Delete from '../../assets/delete.svg';

import {EnterPinStyles} from '../../Pin/EnterPinStyle';

const CapturePin = props => {
  const {pinCode, onPressNumber, onPressBack, heading} = props;
  const {
    PinCodeHeaderContainer,
    PinCodeDisplayStyle,
    PinCodeButtonContainer,
    PinCodeNumberStyle,
  } = EnterPinStyles;
  return (
    <View>
      <View style={PinCodeHeaderContainer}>
        <Title style={{color: 'black'}}>{heading}</Title>
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
  );
};

export default CapturePin;

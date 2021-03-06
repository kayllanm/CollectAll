import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Title, Text, TextInput} from 'react-native-paper';

import Delete from '../../assets/delete.svg';
import {EnterPinStyles} from '../../Pin/EnterPinStyle';

const CaptureWeight = props => {
  const {navigation, title, pinCode, onPressNumber, onPressBack} = props;
  const {
    PinCodeNumberStyle,
    PinCodeContainer,
    PinCodeHeaderContainer,
    PinCodeButtonContainer,
    PinCodeDisplayStyle,
  } = EnterPinStyles;

  const FormatNum = num => {
    const formattedWeight = num?.toLocaleString('en-US', {
      minimumFractionDigits: 2,
    });

    return formattedWeight;
  };

  return (
    <View style={PinCodeContainer}>
      <View style={PinCodeHeaderContainer}>
        <Title style={{color: '#000'}}>{title}</Title>
      </View>
      <View style={[PinCodeDisplayStyle]}>
        <TextInput
          editable={false}
          placeholder="00000,00"
          value={FormatNum(pinCode.join(''))}
          style={{
            backgroundColor: '#fff',
            width: '90%',
            borderWidth: 1,
            borderColor: '#EFEFEF',
            borderRadius: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            color: '#000',
          }}
        />
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
            onPress={() =>
              console.log('go to forgot passcode screen')
            }></TouchableOpacity>
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

export default CaptureWeight;

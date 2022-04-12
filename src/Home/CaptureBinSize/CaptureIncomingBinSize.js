import React, {useState} from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const {width, height} = Dimensions.get('window');

const CaptureIncomingBinSize = props => {
  const {navigation, route} = props;
  const jobData = route.params.job;

  const [selectedBinSize, setSelectedBinSize] = useState('Select');
  const [selectedWaste, setSelectedWaste] = useState('Select');

  const isValidBinSize = selectedBinSize !== 'Select';
  const isValidWaste = selectedWaste !== 'Select';
  const enabedStyle =
    isValidBinSize && isValidWaste
      ? {
          padding: 16,
          borderWidth: 1,
          borderColor: '#3F9ADA',
          marginTop: 16,
        }
      : {padding: 16, borderWidth: 1, backgroundColor: 'grey', marginTop: 16};
  return (
    <View style={{padding: 32}}>
      <View>
        <Text
          style={{
            color: '#000',
            textAlign: 'center',
            fontSize: 22,
            fontWeight: '800',
          }}>
          BIN COLLECT
        </Text>
      </View>
      <View style={{paddingTop: 32}}>
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            fontWeight: '800',
          }}>
          Select Bin Size
        </Text>
        <Picker
          style={{
            backgroundColor: '#9B9B9B',
            color: '#000',
            marginTop: 16,
          }}
          selectedValue={selectedBinSize}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedBinSize(itemValue)
          }>
          <Picker.Item label="Select" value="Select" />
          <Picker.Item label="BinSize22" value="BIN SIZE 22" />
          <Picker.Item label="BinSize11" value="BIN SIZE 11" />
        </Picker>
      </View>
      <View style={{paddingTop: 32}}>
        <Text>Select Waste Type</Text>
        <Picker
          style={{backgroundColor: '#9B9B9B', color: '#000', marginTop: 16}}
          selectedValue={selectedWaste}
          onValueChange={(itemValue, itemIndex) => setSelectedWaste(itemValue)}>
          <Picker.Item label="Select" value="select" />
          <Picker.Item label="General Waste" value="general waste" />
          <Picker.Item label="H1 White Paper" value="h1 white paper" />
          <Picker.Item label="H2 Coloured Paper" value="h2 coloured paper" />
          <Picker.Item label="210l Steel Drum" value="210l steel drum" />
        </Picker>
      </View>
      <View
        style={{
          position: 'absolute',
          height: 200,
          left: 0,
          top: height - 200,
          width: width,
          paddingLeft: 32,
          paddingRight: 32,
        }}>
        <TouchableOpacity
          style={{
            padding: 16,
            borderWidth: 1,
            borderColor: '#F14747',
          }}>
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              fontSize: 22,
              fontWeight: '800',
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={isValidBinSize && isValidWaste ? false : true}
          onPress={() => {
            jobData.CollectBin.BinSizeCollect = selectedBinSize;
            jobData.CollectBin.WasteClassification = selectedWaste;
            navigation.navigate('confirm', {job: jobData});
          }}
          style={enabedStyle}>
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              fontSize: 22,
              fontWeight: '800',
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CaptureIncomingBinSize;

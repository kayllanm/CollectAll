import React, {useState} from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native';
import {Text, Dialog, Button, Portal, Paragraph} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const {width, height} = Dimensions.get('window');

const BinWasteView = props => {
  const {navigation, route} = props;
  const jobData = route.params.job;

  const [selectedBinSize, setSelectedBinSize] = useState('Select Bin Size');
  const [visible, setVisible] = useState(false);

  const isValidBinSize = selectedBinSize !== 'Select Bin Size';
  const enabedStyle = isValidBinSize
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
          BIN DROPOFF
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
          <Picker.Item label="Select Bin Size" value="Select Bin Size" />
          <Picker.Item label="BinSize22" value="BIN SIZE 22" />
          <Picker.Item label="BinSize11" value="BIN SIZE 11" />
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
          disabled={isValidBinSize ? false : true}
          onPress={() => {
            setVisible(true);
          }}
          style={enabedStyle}>
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              fontSize: 22,
              fontWeight: '800',
            }}>
            OK
          </Text>
        </TouchableOpacity>
      </View>
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>DropOff Complete</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Bin DropOff complete</Paragraph>
            <Paragraph>
              Please head to Site2 address to collect Bin 22
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                setVisible(false);
                jobData.BinDropOff.BinSizeDropOff = selectedBinSize;
                navigation.navigate('incomingBinSize', {job: jobData});
              }}>
              Next
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default BinWasteView;

import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native';
import CaptureWeight from '../Components/CaptureWeight';
import {Text, Dialog, Button, Portal, Paragraph} from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';

const {width, height} = Dimensions.get('window');

const InComingView = props => {
  const {navigation, route} = props;

  const jobData = route.params.job;
  const [pinCode, setPinCode] = useState(['', '', '', '', '', '', '']);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pinCode.join('').length > 0) {
      jobData.CollectBin.IncomingMass = pinCode.join('');
    }
  }, [pinCode]);

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

  const disabledstyle =
    pinCode.join('').length > 0
      ? {
          padding: 16,
          borderWidth: 1,
          borderColor: '#3F9ADA',
          marginTop: 16,
        }
      : {
          padding: 16,
          borderWidth: 1,
          marginTop: 16,
          backgroundColor: 'grey',
        };
  return (
    <SafeAreaView
      style={{backgroundColor: '#fff', flex: 1, alignItems: 'center'}}>
      <CaptureWeight
        pinCode={pinCode}
        onPressNumber={onPressNumber}
        onPressBack={onPressBack}
        title="Weighbridge INCOMING"
      />
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
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={pinCode.join('').length > 0 ? false : true}
          onPress={() => setVisible(true)}
          style={disabledstyle}>
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
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Take a picture of the INCOMING truck mass</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                setVisible(false);
                if (pinCode.join('').length > 0) {
                  const options = {
                    saveToPhotos: true,
                    mediaType: 'photo',
                    includeBase64: true,
                    includeExtra: true,
                  };
                  ImagePicker.launchCamera(options, res => {
                    if (res.didCancel) {
                      console.log('User cancelled image picker');
                    } else if (res.error) {
                      console.log('ImagePicker Error: ', res.error);
                    } else if (res.customButton) {
                      console.log(
                        'User tapped custom button: ',
                        res.customButton,
                      );
                    } else {
                      jobData.CollectBin.IncomingPicture = res;
                      navigation.navigate('jobComplete', {job: jobData});
                    }
                  });
                }
              }}>
              Take Picture
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </SafeAreaView>
  );
};

export default InComingView;

import React from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import {Card, Text, Title} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const CustomerConfirmView = props => {
  const {navigation, route} = props;
  const jobData = route.params.job;

  return (
    <Card style={{flex: 1, paddingLeft: 32, paddingTop: 32, paddingRight: 132}}>
      <Title>Customer confirm Job</Title>
      <Text>Tasks:</Text>
      <Text>DROP OFF 22 BIN at site 1 address</Text>
      <Text>COLLECT BIN 22 at site 2 address</Text>
      <Text>waste classification: General Waste</Text>
      <Card
        style={{
          position: 'absolute',
          height: 200,
          left: 0,
          top: height - 200,
          width: width - 64,
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
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 16,
            borderWidth: 1,
            borderColor: '#3F9ADA',
            marginTop: 16,
          }}
          onPress={() => {
            navigation.navigate('verification', {job: jobData});
          }}>
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
      </Card>
    </Card>
  );
};

export default CustomerConfirmView;

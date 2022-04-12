import React from 'react';
import {Card, Title, Text} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';

const JobCompleteView = props => {
  const {navigation, route} = props;
  return (
    <Card style={{flex: 1, padding: 32}}>
      <Title>Job #0017264800 is now Complete</Title>

      <Card>
        <TouchableOpacity
          style={{
            padding: 16,
            borderWidth: 1,
            borderColor: '#3F9ADA',
            marginTop: 16,
          }}
          onPress={() => {
            navigation.navigate('JobsList');
          }}>
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              fontSize: 22,
              fontWeight: '800',
            }}>
            Done
          </Text>
        </TouchableOpacity>
      </Card>
    </Card>
  );
};

export default JobCompleteView;

import * as React from 'react';
import {View, SafeAreaView} from 'react-native';
import moment from 'moment';
import {Button, Text} from '@react-native-material/core';

import HomeViewStyles from './HomeViewStyles';

const HomeView = props => {
  const {navigation} = props;
  const {DateContainer, DateTextStyle, SubView, ButtonView, ButtonStyle} =
    HomeViewStyles;
  const TodaysDate = moment().format('ddd DD MMMM YYYY');
  const greeting = 'Hello DRIVER';
  const listOfJobs = 'There are 0 job cards scheduled for today';
  return (
    <SafeAreaView>
      <View style={DateContainer}>
        <Text style={DateTextStyle}>{TodaysDate}</Text>
      </View>
      <View style={SubView}>
        <Text>{greeting}</Text>
      </View>
      <View style={SubView}>
        <Text>{listOfJobs}</Text>
      </View>
      <View style={ButtonView}>
        <Button
          variant="outlined"
          title="Fetch Jobs Show Jobs"
          style={ButtonStyle}
          color="black"
          onPress={() => {
            navigation.navigate('JobsList');
          }}
        />
      </View>
      <View style={SubView}>
        <Text>0 Jobs need to be uploaded</Text>
      </View>
      <View style={ButtonView}>
        <Button
          variant="outlined"
          title="Upload Jobs"
          style={ButtonStyle}
          color="black"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeView;

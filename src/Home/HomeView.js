import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import moment from 'moment';
import {Button} from '@react-native-material/core';
import {Text} from 'react-native-paper';
import {openDatabase} from 'react-native-sqlite-storage';

import HomeViewStyles from './HomeViewStyles';
let db = openDatabase({name: 'CollectAll.db'});
const HomeView = props => {
  const {navigation} = props;
  const {DateContainer, DateTextStyle, SubView, ButtonView, ButtonStyle} =
    HomeViewStyles;
  const TodaysDate = moment().format('ddd DD MMMM YYYY');
  const greeting = 'Hello DRIVER';
  const listOfJobs = 'There are 0 job cards scheduled for today';
  const [driver, setDriver] = useState();
  const [jobsLenght, setJobsLenght] = useState();

  const openDB = () => {
    db = openDatabase(
      {
        name: 'CollectAll.db',
        createFromLocation: 1,
      },
      success, //okCallback
      fail, // error callback
    );
  };

  const success = () => {
    getDriverDetail();
    getNumOfJobs();
  };

  const fail = error => {
    console.error(error); // logging out error if there is one
  };

  const getDriverDetail = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Driver_Table',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));

          setDriver(temp[0]);
        },
        error => {
          console.log(error);
        },
      );
    });
  };

  const getNumOfJobs = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Jobs_Table',
        [],
        (tx, results) => {
          setJobsLenght(results.rows.length);
        },
        error => {
          console.log(error);
        },
      );
    });
  };

  return (
    <SafeAreaView>
      {openDB()}
      <View style={DateContainer}>
        <Text style={DateTextStyle}>{TodaysDate}</Text>
      </View>
      <View style={SubView}>
        <Text style={{color: '#000'}}>Hello {driver?.driver_name}</Text>
      </View>
      <View style={SubView}>
        <Text style={{color: '#000'}}>
          There are {jobsLenght} job cards scheduled for today
        </Text>
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
        <Text style={{color: '#000'}}>0 Jobs need to be uploaded</Text>
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

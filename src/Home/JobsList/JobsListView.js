import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import moment from 'moment';
import Menu from './assets/menu.svg';

import JobListViewStyles from './JobsListViewStyles';

const JobsListView = props => {
  const {navigation} = props;
  const {
    Container,
    HeadingStyle,
    ListItemContainer,
    ListItemIdContainer,
    ListItemTextView,
    ListItemText,
  } = JobListViewStyles;
  const TodaysDate = moment().format('ddd DD MMMM YYYY');

  const listOfJobs = [
    {
      id: 1,
      name: 'Johnson Controls West Bank',
    },
    {
      id: 2,
      name: 'Nother Company Wilsonia',
    },
    {
      id: 3,
      name: 'Nother Company IDZ',
    },
    {
      id: 4,
      name: 'Nother Company Vincent',
    },
  ];
  return (
    <View style={Container}>
      <Text style={{color: '#000'}}>{TodaysDate}</Text>
      <Text style={HeadingStyle}>Scheduled Jobs</Text>
      {listOfJobs.map(job => (
        <TouchableOpacity
          style={ListItemContainer}
          onPress={() => {
            navigation.navigate('JobDetails');
          }}>
          <View style={ListItemIdContainer}>
            <Text style={{color: '#000'}}>{job.id}</Text>
          </View>
          <View style={ListItemTextView}>
            <Text style={ListItemText}>{job.name}</Text>
            <Menu height={30} width={30} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default JobsListView;

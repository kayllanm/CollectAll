import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EnterPinView from '../Pin/EnterPinView';
import HomeView from '../Home/HomeView';
import JobsListView from '../Home/JobsList/JobsListView';
import JobDetailsView from '../Home/JobDetails/JobDetailsView';

const Stack = createNativeStackNavigator();

export default function MainNavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="EnterPin"
          component={EnterPinView}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeView}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="JobsList"
          component={JobsListView}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="JobDetails"
          component={JobDetailsView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

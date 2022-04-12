import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EnterPinView from '../Pin/EnterPinView';
import HomeView from '../Home/HomeView';
import JobsListView from '../Home/JobsList/JobsListView';
import JobDetailsView from '../Home/JobDetails/JobDetailsView';
import OutGoingView from '../Home/WeighbridgeViews/OutGoingView';
import BinWasteView from '../Home/CaptureBinSize/CaptureOutgoingBinSize';
import CustomerVerificationView from '../Home/Verification/CustomerVerification';
import InComingView from '../Home/WeighbridgeViews/InComingView';
import CaptureIncomingBinSize from '../Home/CaptureBinSize/CaptureIncomingBinSize';
import CustomerConfirmView from '../Home/Verification/CustomerConfirmView';
import JobCompleteView from '../Home/JobComplete/JobCompleteView';

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
        <Stack.Screen
          options={{headerShown: false}}
          name="outgoing"
          component={OutGoingView}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="binWaste"
          component={BinWasteView}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="verification"
          component={CustomerVerificationView}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="incoming"
          component={InComingView}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="incomingBinSize"
          component={CaptureIncomingBinSize}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="confirm"
          component={CustomerConfirmView}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="jobComplete"
          component={JobCompleteView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

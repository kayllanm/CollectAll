import React from 'react';
import {View, Text} from 'react-native';
import GetLocation from 'react-native-get-location';

export const getLocation = () => {
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then(location => {
      return (
        <View>
          <Text style={{color: 'black'}}>
            Latitude: {location.latitude} - Longitude {location.longitude}
          </Text>
        </View>
      );
    })
    .catch(error => {
      const {code, message} = error;
      console.warn(code, message);
      return (
        <View>
          <Text>{message}</Text>
        </View>
      );
    });
};

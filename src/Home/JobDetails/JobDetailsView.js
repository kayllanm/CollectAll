import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const JobDetailsView = props => {
  return (
    <View style={{margin: 16}}>
      <Text>JOBNUM (Job 1)</Text>
      <View style={{alignItems: 'center', paddingTop: 16, paddingBottom: 16}}>
        <Image source={require('./assets/jclogo.jpeg')} />
      </View>
      <View style={{alignItems: 'center', paddingBottom: 16}}>
        <Text>Johnson Controls</Text>
        <Text>42 Electron Ave, Isando, Kempton Park, 1600</Text>
        <Text>BIN 22 COLLECT</Text>
        <Text>Light Metals</Text>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#9B9B9B',
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 16,
        }}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Start Job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobDetailsView;

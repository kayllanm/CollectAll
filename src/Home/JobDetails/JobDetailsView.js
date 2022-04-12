import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

const JobDetailsView = props => {
  const {navigation} = props;
  const jobData = {
    BinDropOff: {
      outGoingMass: '',
      outgoingPicture: {},
      BinSizeDropOff: '',
    },
    CollectBin: {
      BinSizeCollect: '',
      WasteClassification: '',
      IncomingMass: '',
      IncomingPicture: '',
    },
    customerSignoff: false,
  };
  return (
    <View style={{margin: 16}}>
      <Text style={{color: '#000'}}>JOBNUM (Job 1)</Text>
      <View style={{alignItems: 'center', paddingTop: 16, paddingBottom: 16}}>
        <Image source={require('./assets/jclogo.jpeg')} />
      </View>
      <View style={{alignItems: 'center', paddingBottom: 16}}>
        <Text style={{color: '#000'}}>Johnson Controls</Text>
        <Text style={{color: '#000'}}>
          42 Electron Ave, Isando, Kempton Park, 1600
        </Text>
        <Text style={{color: '#000'}}>BIN 22 COLLECT</Text>
        <Text style={{color: '#000'}}>Light Metals</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('outgoing', {job: jobData});
        }}
        style={{
          borderWidth: 1,
          borderColor: '#9B9B9B',
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 16,
        }}>
        <Text style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
          Start Job
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobDetailsView;

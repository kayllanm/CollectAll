import React, {useState, useEffect} from 'react';
import {Card, Text} from 'react-native-paper';
import CapturePin from '../Components/CapturePin';

const CustomerVerificationView = props => {
  const {navigation, route} = props;
  const [pinCode, setPinCode] = useState(['', '', '', '']);
  const [count, setCount] = useState(0);

  const jobData = route.params.job;

  useEffect(() => {
    if (count === 4) {
      if (pinCode.join('') === '1111') {
        jobData.customerSignoff = true;
        navigation.navigate('incoming', {job: jobData});
      }
    }
  }, [count]);

  const onPressNumber = num => {
    let tempCode = [...pinCode];
    for (var i = 0; i < tempCode.length; i++) {
      if (tempCode[i] == '') {
        tempCode[i] = num;
        break;
      } else {
        continue;
      }
    }
    setPinCode(tempCode);
    setCount(count + 1);
  };

  const onPressBack = num => {
    let tempCode = [...pinCode];
    for (var i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] != '') {
        tempCode[i] = '';
        break;
      } else {
        continue;
      }
    }
    setPinCode(tempCode);
  };
  return (
    <Card style={{flex: 1}}>
      <CapturePin
        pinCode={pinCode}
        onPressNumber={onPressNumber}
        onPressBack={onPressBack}
        heading="Enter Customer Pin"
      />
    </Card>
  );
};

export default CustomerVerificationView;

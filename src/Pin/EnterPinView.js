import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, TouchableOpacity} from 'react-native';
import {Title, Text} from 'react-native-paper';
import {openDatabase} from 'react-native-sqlite-storage';
import NetInfo from '@react-native-community/netinfo';

import Delete from '../assets/delete.svg';
import {getLocation} from '../Utils/Utilities';
import {EnterPinStyles} from './EnterPinStyle';

const EnterPinView = props => {
  const {navigation} = props;
  const {
    PinCodeNumberStyle,
    PinCodeContainer,
    PinCodeHeaderContainer,
    PinCodeButtonContainer,
    PinCodeDisplayStyle,
  } = EnterPinStyles;

  const [pinCode, setPinCode] = useState(['', '', '', '']);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
    });

    // Unsubscribe
    unsubscribe();
  }, []);
  let db = null;
  db = openDatabase({name: 'CollectAll.db'});

  const createDB = () => {
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
    createTables();
  };

  const fail = error => {
    console.error(error); // logging out error if there is one
  };

  const createTables = () => {
    db.transaction(function (txn) {
      //Create driver table
      txn.executeSql(
        "SELECT * FROM sqlite_master WHERE type='table' AND name='Driver_Table'",
        [],
        function (tx, res) {
          // console.log('Driver_Table item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Driver_Table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Driver_Table(driver_id INTEGER PRIMARY KEY AUTOINCREMENT, driver_name VARCHAR(30), driver_phone VARCHAR(15), driver_address VARCHAR(255), driver_pin VARCHAR(4))',
              [],
            );
          } else {
            insertDriverData();
          }
        },
      );

      // Create Jobs table
      txn.executeSql(
        'SELECT * FROM sqlite_master WHERE type="table" AND name="Jobs_Table"',
        [],
        function (tx, res) {
          // console.log('Jobs_Table item:', res.rows.length);
          // tx.executeSql(
          //   'DROP TABLE IF EXISTS Jobs_Table',
          //   [],
          //   res => {
          //     console.log('delete success');
          //   },
          //   error => {
          //     console.log(error);
          //   },
          // );
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Jobs_Table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Jobs_Table(job_id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                'driver_id INT(5),' +
                'job_reference VARCHAR(30),' +
                'customer_name VARCHAR(30),' +
                'customer_pin INT(4),' +
                'job_address_one VARCHAR(255),' +
                'job_address_one_type VARCHAR(255),' +
                'outgoing_mass VARCHAR(10),' +
                'outgoing BLOB,' +
                'outgoing_bin_size VARCHAR(3),' +
                'job_address_two VARCHAR(255),' +
                'job_address_two_type VARCHAR(255),' +
                'incoming_mass VARCHAR(10),' +
                'incoming BLOB,' +
                'incoming_bin_size VARCHAR(3),' +
                'waste_id INT(3),' +
                'customer_verification BOOLEAN,' +
                'job_status VARCHAR(20))',
              [],
              res => {
                insertJobsData();
              },
              error => {
                console.log(error);
              },
            );
          } else {
            insertJobsData();
          }
        },
      );

      // Create Waste table
      txn.executeSql('SELECT * FROM Waste_Table', [], function (tx, res) {
        // console.log('Waste_Table item:', res.rows.length);
        if (res.rows.length == 0) {
          txn.executeSql('DROP TABLE IF EXISTS Waste_Table', []);
          txn.executeSql(
            'CREATE TABLE IF NOT EXISTS Waste_Table(waste_id INTEGER PRIMARY KEY AUTOINCREMENT,' +
              'waste_type VARCHAR(30),',
            [],
          );
        } else {
          insertWasteData();
        }
      });
    });
  };

  const insertDriverData = () => {
    db.transaction(function (txn) {
      txn.executeSql(
        'SELECT driver_name FROM Driver_Table WHERE driver_name="kayllan"',
        [],
        function (tx, res) {
          if (res.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO Driver_Table (driver_name, driver_phone, driver_address, driver_pin) VALUES (?, ?, ?, ?)',
              ['kayllan', '0765892981', 'drivers address', '1111'],
              function (tx, res) {
                // console.log('item:', res.rowsAffected);
              },
              function (error) {
                console.log(error);
              },
            );
          }
        },
        function (error) {
          console.log(error);
        },
      );
    });
  };

  const customers = [
    {
      name: 'Mercedes-Benz SA',
      params: [
        'Job#001',
        'Mercedes-Benz SA',
        'Cnr Hendrick Potgieter &, William Nicol Dr, Constantia Kloof, Johannesburg, 1709',
        'Dropoff',
        '1141 Leader Ave, Stormill, Roodepoort, 1725',
        'Collect',
        'Active',
      ],
    },
    {
      name: 'Mercedes-Benz SA',
      params: [
        'Job#002',
        'cccc',
        '42 Electron Ave, Isando, Kempton Park, 1600',
        'Dropoff',
        '42 Electron Ave, Isando, Kempton Park, 1600',
        'Collect',
        'Active',
      ],
    },
    {
      name: 'Nestle',
      params: [
        'Job#003',
        'Nestle',
        '8 Anslow Ln, Bryanston, Sandton, 2191',
        'Dropoff',
        '8 Anslow Ln, Bryanston, Sandton, 2191',
        'Collect',
        'Active',
      ],
    },
    {
      name: 'Feltex',
      params: [
        'Job#004',
        'Feltex',
        '41 Martinus Rass St, Rosslyn, Pretoria, 0200',
        'Dropoff',
        '41 Martinus Rass St, Rosslyn, Pretoria, 0200',
        'Collect',
        'Active',
      ],
    },
  ];

  const insertJobsData = () => {
    db.transaction(function (txn) {
      for (let customer of customers) {
        txn.executeSql(
          'SELECT customer_name FROM Jobs_Table WHERE customer_name="' +
            customer.name +
            '"',
          [],
          (tx, res) => {
            console.log(res.rows.length);
            if (res.rows.length === 0) {
              tx.executeSql(
                'INSERT INTO Jobs_Table (job_reference, customer_name, job_address_one, job_address_one_type, job_address_two, job_address_two_type, job_status) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [customer.params],
                rs => {
                  console.log(rs);
                },
                error => {
                  console.log(error);
                },
              );
            }
          },
          error => {
            console.log(error);
          },
        );
      }
      // txn.executeSql(
      //   'INSERT INTO Jobs_Table (job_reference, customer_name, job_address_one, job_address_one_type, job_address_two, job_address_two_type, job_status) VALUES (?, ?, ?, ?, ?, ?, ?), (?, ?, ?, ?, ?, ?, ?), (?, ?, ?, ?, ?, ?, ?), (?, ?, ?, ?, ?, ?, ?)',
      //   [
      //     'Job#001',
      //     'Mercedes-Benz SA',
      //     'Cnr Hendrick Potgieter &, William Nicol Dr, Constantia Kloof, Johannesburg, 1709',
      //     'Dropoff',
      //     '1141 Leader Ave, Stormill, Roodepoort, 1725',
      //     'Collect',
      //     'Active',
      //     'Job#002',
      //     'cccc',
      //     '42 Electron Ave, Isando, Kempton Park, 1600',
      //     'Dropoff',
      //     '42 Electron Ave, Isando, Kempton Park, 1600',
      //     'Collect',
      //     'Active',
      //     'Job#003',
      //     'Nestle',
      //     '8 Anslow Ln, Bryanston, Sandton, 2191',
      //     'Dropoff',
      //     '8 Anslow Ln, Bryanston, Sandton, 2191',
      //     'Collect',
      //     'Active',
      //     'Job#004',
      //     'Feltex',
      //     '41 Martinus Rass St, Rosslyn, Pretoria, 0200',
      //     'Dropoff',
      //     '41 Martinus Rass St, Rosslyn, Pretoria, 0200',
      //     'Collect',
      //     'Active',
      //   ],
      //   function (tx, res) {
      //     console.log('item:', res.rowsAffected);
      //   },
      //   function (error) {
      //     console.log(error);
      //   },
      // );
    });
  };

  const insertWasteData = () => {
    db.transaction(function (txn) {
      txn.executeSql(
        'INSERT INTO Waste_Table (waste_type) VALUES (?, ?, ?, ?, ?, ?)',
        [
          'General Waste',
          'HL1 White Paper',
          'HL2 Colour Paper',
          'Pallets',
          'Light Steel',
          '25l Steel Drum',
        ],
        function (tx, res) {
          // console.log('item:', res.rowsAffected);
        },
      );
    });
  };

  useEffect(() => {
    if (count === 4) {
      if (pinCode.join('') === '1111') {
        navigation.navigate('Home');
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
    <SafeAreaView style={PinCodeContainer}>
      {createDB()}
      <View>
        <View style={PinCodeHeaderContainer}>
          <Title style={{color: 'black'}}>Enter Your Pin</Title>
        </View>
        <View style={PinCodeDisplayStyle}>
          <Text style={{color: 'black'}}>{pinCode.join(' ')} </Text>
        </View>
        <View style={PinCodeButtonContainer}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(1)}>
              <Text style={{color: '#000'}}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(2)}>
              <Text style={{color: '#000'}}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(3)}>
              <Text style={{color: '#000'}}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(4)}>
              <Text style={{color: '#000'}}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(5)}>
              <Text style={{color: '#000'}}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(6)}>
              <Text style={{color: '#000'}}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(7)}>
              <Text style={{color: '#000'}}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(8)}>
              <Text style={{color: '#000'}}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(9)}>
              <Text style={{color: '#000'}}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{paddingLeft: 8, width: 100, justifyContent: 'center'}}
              onPress={() => console.log('go to forgot passcode screen')}>
              <Text style={{color: '#000', textAlign: 'center'}}>
                Forgot Passcode
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressNumber(0)}>
              <Text style={{color: '#000'}}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={PinCodeNumberStyle}
              onPress={() => onPressBack()}>
              <Delete height={30} width={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EnterPinView;

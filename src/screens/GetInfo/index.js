/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import Button from '../../components/Button';
import {getName} from '../../redux/action/action';
import Statusbar from '../../components/StatusBar';
import styles from '../../components/Globalstyle/styles';
import ImageIcon from '../../components/ImageIcon';
import Textinput from '../../components/Textinput';

const GetInfo = ({navigation}) => {
  const dispatch = useDispatch();
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');

  const saveDetail = () => {
    const object = {Fname, Lname};
    if (Fname === '' && Lname === '') {
      alert('Fields cannot be Empty');
    } else {
      dispatch(getName(object));
      navigation.navigate('GetMoreInfo');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ImageIcon onPress={() => navigation.goBack()} />
        <Statusbar />

        <Text style={styles.textDesign}>
          Could you tell us a bit more {'\n'} about yourself?
        </Text>

        <Textinput
          mode="outlined"
          label="First Name"
          placeholder="Name"
          onChangeText={Name => setFname(Name)}
          defaultValue={Fname}
        />

        <Textinput
          mode="outlined"
          label="Last Name"
          placeholder="Name"
          onChangeText={Name => setLname(Name)}
          defaultValue={Lname}
        />

        <Button text={'next'} onPress={() => saveDetail()} />
      </View>
    </View>
  );
};

export default GetInfo;

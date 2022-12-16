import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';

import Button from '../../components/Button';
import styles from './styles';
import {getEmail} from '../../redux/action/action';

const GetInfo = ({navigation}) => {
  const dispatch = useDispatch();
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');

  const saveDetail = () => {
    const object = {Fname, Lname};
    dispatch(getEmail(object));
    navigation.navigate('GetMoreInfo');
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textDesign}>
          could you tell us a bit more {'\n'}about yourself
        </Text>
        <View style={styles.inputTextTitle}>
          <Text>First Name</Text>
        </View>
        <TextInput
          placeholder="name"
          style={styles.textField}
          onChangeText={Name => setFname(Name)}
          defaultValue={Fname}
        />

        <View style={styles.inputTextTitle}>
          <Text>Last Name</Text>
        </View>
        <TextInput
          placeholder="Lname"
          style={styles.textField}
          onChangeText={Name => setLname(Name)}
          defaultValue={Lname}
        />

        <Button text={'next'} onPress={() => saveDetail()} />
      </View>
    </View>
  );
};

export default GetInfo;

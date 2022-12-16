/* eslint-disable no-alert */
import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';

import Button from '../../components/Button';
import styles from './styles';
import regex from '../../utils/regex';
import {getEmail} from '../../redux/action/action';

const GetUserDetail = ({navigation}) => {
  const dispatch = useDispatch();
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [isValidemail, setisValidemail] = useState(true);
  const [isPhoneValid, setisPhoneValid] = useState(true);

  const validate = () => {
    const object = {mail, phone};
    if (mail === '' && phone === '') {
      alert('fill the required field');
    } else {
      let maxLength = '1000000000';

      let xyz = phone.toString();
      if (xyz.length !== maxLength.length) {
        alert('number is less than 10');
      } else {
        dispatch(getEmail(object));
        navigation.navigate('getinfo');
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textDesign}>
          What is the email and phone{'\n'}number that we can reach{'\n'}you the
          best?
        </Text>
        <View style={styles.inputTextTitle}>
          <Text>Email Address</Text>
        </View>
        <TextInput
          placeholder="dfshjfgs"
          style={styles.textField}
          onChangeText={Name => setMail(Name)}
          defaultValue={mail}
          onBlur={() => {
            setisValidemail(
              regex.emailPattern.test(mail) === true ? '' : 'Incorrect email',
            );
          }}
        />

        <Text style={styles.errorMsg}>{isValidemail}</Text>
        <View style={styles.inputTextTitle}>
          <Text>Phone</Text>
        </View>
        <TextInput
          placeholder="dfshjfgs"
          style={styles.textField}
          onChangeText={Name => setPhone(Name)}
          defaultValue={phone}
          onBlur={() => {
            setisPhoneValid(
              regex.passwordRule.test(phone) === true
                ? ''
                : 'Incorrect Mobilenumber',
            );
          }}
        />
        <Text style={styles.errorMsg}>{isPhoneValid}</Text>
        <Button text={'next'} onPress={() => validate()} />
      </View>
    </View>
  );
};

export default GetUserDetail;

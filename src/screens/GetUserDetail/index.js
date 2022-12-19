/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import Button from '../../components/Button';
import regex from '../../utils/regex';
import {getEmail} from '../../redux/action/action';
import Statusbar from '../../components/StatusBar';
import styles from '../../components/Globalstyle/styles';
import Textheader from '../../components/Textheader';
import ImageIcon from '../../components/ImageIcon';
import Textinput from '../../components/Textinput';

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
        <ImageIcon onPress={() => navigation.goBack()} />
        <Statusbar />

        <Textheader
          text="What is the email and phone
           number that we can reach               you the best?"
        />

        <Textinput
          text={'Email Address'}
          placeholder="Email"
          onChangeText={Name => setMail(Name)}
          defaultValue={mail}
          onBlur={() => {
            setisValidemail(
              regex.emailPattern.test(mail) === true ? '' : 'Incorrect email',
            );
          }}
          warning={isValidemail}
        />

        <Textinput
          text={'Phone'}
          placeholder="Number"
          onChangeText={Name => setPhone(Name)}
          defaultValue={phone}
          onBlur={() => {
            setisPhoneValid(
              regex.passwordRule.test(phone) === true
                ? ''
                : 'Incorrect MobileNumber',
            );
          }}
          warning={isPhoneValid}
        />
        <Button text={'next'} onPress={() => validate()} />
      </View>
    </View>
  );
};

export default GetUserDetail;

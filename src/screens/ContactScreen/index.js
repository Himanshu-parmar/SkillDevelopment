/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import Button from '../../components/Button';
import regex from '../../utils/regex';
import {updateContact} from '../../redux/action/action';
import Statusbar from '../../components/StatusBar';
import styles from '../../constant/Globalstyle/styles';
import ImageIcon from '../../components/ImageIcon';
import Textinput from '../../components/Textinput';

const ContactScreen = ({navigation}) => {
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
        dispatch(updateContact(object));
        navigation.navigate('getinfo');
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ImageIcon onPress={() => navigation.goBack()} />
        <Statusbar />

        <Text style={styles.textDesign}>
          What is the email and phone{'\n'}
          number that we can reach {'\n'}you the best?
        </Text>
        <Textinput
          mode="outlined"
          label="Email Address"
          placeholder="Email"
          activeOutlineColor="red"
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
          mode="outlined"
          label="Phone"
          placeholder="Number"
          activeOutlineColor="red"
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

export default ContactScreen;

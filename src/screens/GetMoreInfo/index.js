/* eslint-disable no-alert */
import React, {useState} from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../../components/Button';
import {getJobTitle} from '../../redux/action/action';
import StatusBar from '../../components/StatusBar';
import styles from '../../components/Globalstyle/styles';
import Textheader from '../../components/Textheader';
import ImageIcon from '../../components/ImageIcon';
import Textinput from '../../components/Textinput';
import styless from './styless';

const GetMoreInfo = ({navigation}) => {
  const dispatch = useDispatch();
  const contactData = useSelector(state => state.counter.userLoginData);
  const nameDetail = useSelector(state => state.counter.nameData);
  const jobData = useSelector(state => state.counter.companyData);
  const developData = useSelector(state => state.counter.developmentData);
  const departData = useSelector(state => state.counter.departrmentData);

  const [openModal, setopenModal] = useState(false);
  const [companyName, setcompanyName] = useState('');
  const [jobtitle, setjobtitle] = useState('');

  const jobDetail = () => {
    const object = {companyName, jobtitle};
    if (companyName === '' && jobtitle === '') {
      alert('Fields cannot be Empty');
    } else {
      dispatch(getJobTitle(object));
      setopenModal(true);
    }
  };
  const closeModal = () => {
    setopenModal(false);
    navigation.navigate('home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ImageIcon onPress={() => navigation.goBack()} />
        <StatusBar />

        <Textheader
          text={'Thanks! 😊 just a few more    details and we are done!'}
        />
        <Textinput
          text="Company Name"
          placeholder="companyName"
          onChangeText={Name => setcompanyName(Name)}
          defaultValue={companyName}
        />
        <Textinput
          text="JobTitle"
          placeholder="jobTitle"
          onChangeText={Name => setjobtitle(Name)}
          defaultValue={jobtitle}
        />

        <Button text={'REQUEST DEMO'} onPress={() => jobDetail()} />
        <Modal transparent={true} animationType="fade" visible={openModal}>
          <View style={styless.container}>
            <View style={styless.modal}>
              <Text style={styless.heading}>DATA</Text>
              <Text style={styless.storeData}>
                Product :- {developData}
                {'\n'}
                {'\n'}
                Department :- {departData}
                {'\n'}
                {'\n'}
                Email :- {contactData.mail}
                {'\n'}
                {'\n'}
                Phone :- {contactData.phone}
                {'\n'}
                {'\n'}
                Name :- {nameDetail.Fname} {nameDetail.Lname}
                {'\n'}
                {'\n'}
                companyName :- {jobData.companyName}
                {'\n'}
                {'\n'}
                job Title :- {jobData.jobtitle}
              </Text>
            </View>

            <TouchableOpacity onPress={() => closeModal()}>
              <Text style={styless.close}>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default GetMoreInfo;

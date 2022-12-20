/* eslint-disable no-alert */
import React, {useState} from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../../components/Button';
import {updateCompanyDetail} from '../../redux/action/action';
import StatusBar from '../../components/StatusBar';
import styles from '../../constant/Globalstyle/styles';
import ImageIcon from '../../components/ImageIcon';
import Textinput from '../../components/Textinput';
import styless from './styless';

const ThankyouScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const contactDetail = useSelector(state => state.counter.contactDetail);
  const personalDetail = useSelector(state => state.counter.personalDetail);
  const companyData = useSelector(state => state.counter.companyData);
  const developmentData = useSelector(state => state.counter.developmentData);
  const departrmentData = useSelector(state => state.counter.departrmentData);

  const [openModal, setopenModal] = useState(false);
  const [companyName, setcompanyName] = useState('');
  const [jobtitle, setjobtitle] = useState('');

  const modalVisible = () => {
    const object = {companyName, jobtitle};
    if (companyName === '' && jobtitle === '') {
      alert('Fields cannot be Empty');
    } else {
      dispatch(updateCompanyDetail(object));
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

        <Text style={styles.textDesign}>
          Thanks! 😊 just a few more {'\n'} details and we are done!
        </Text>
        <Textinput
          mode="outlined"
          label="Company Name"
          placeholder="companyName"
          onChangeText={Name => setcompanyName(Name)}
          defaultValue={companyName}
        />
        <Textinput
          mode="outlined"
          label="Job Title"
          placeholder="jobTitle"
          onChangeText={Name => setjobtitle(Name)}
          defaultValue={jobtitle}
        />

        <Button text={'REQUEST DEMO'} onPress={() => modalVisible()} />
        <Modal transparent={true} animationType="fade" visible={openModal}>
          <View style={styless.container}>
            <View style={styless.modal}>
              <Text style={styless.heading}>DATA</Text>
              <Text style={styless.storeData}>
                Product :- {developmentData}
                {'\n'}
                {'\n'}
                Department :- {departrmentData}
                {'\n'}
                {'\n'}
                Email :- {contactDetail.mail}
                {'\n'}
                {'\n'}
                Phone :- {contactDetail.phone}
                {'\n'}
                {'\n'}
                Name :- {personalDetail.Fname} {personalDetail.Lname}
                {'\n'}
                {'\n'}
                companyName :- {companyData.companyName}
                {'\n'}
                {'\n'}
                job Title :- {companyData.jobtitle}
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

export default ThankyouScreen;

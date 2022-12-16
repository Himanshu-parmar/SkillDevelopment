import React, {useState} from 'react';
import {Text, View, TextInput, Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../../components/Button';
import styles from './styles';
import {getEmail} from '../../redux/action/action';

const GetMoreInfo = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.counter.userLoginData);
  const [openModal, setopenModal] = useState(false);
  const [companyName, setcompanyName] = useState('');
  const [jobtitle, setjobtitle] = useState('');

  const jobDetail = () => {
    const object = {companyName, jobtitle};
    dispatch(getEmail(object));
    navigation.navigate('home');
    setopenModal(true);
  };
  const closeModal = () => {
    setopenModal(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textDesign}>
          Thanks! just a few more {'\n'}details and we are done!
        </Text>
        <View style={styles.inputTextTitle}>
          <Text>Company Name</Text>
        </View>
        <TextInput
          placeholder="companyName"
          style={styles.textField}
          onChangeText={Name => setcompanyName(Name)}
          defaultValue={companyName}
        />

        <View style={styles.inputTextTitle}>
          <Text>Job Title</Text>
        </View>
        <TextInput
          placeholder="jobTitle"
          style={styles.textField}
          onChangeText={Name => setjobtitle(Name)}
          defaultValue={jobtitle}
        />

        <Button text={'REQUEST DEMO'} onPress={() => jobDetail()} />
        <Modal visible={openModal}>
          <Button text={'back'} onPress={() => closeModal()} />

          <Text>{data}</Text>
        </Modal>
      </View>
    </View>
  );
};

export default GetMoreInfo;

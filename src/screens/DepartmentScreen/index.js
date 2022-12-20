import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import Button from '../../components/Button';
import StatusBar from '../../components/StatusBar';
import {updateDepartment} from '../../redux/action/action';
import styles from '../../constant/Globalstyle/styles';
import ImageIcon from '../../components/ImageIcon';

const DepartmentScreen = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ImageIcon onPress={() => navigation.goBack()} />
        <StatusBar />
        <Text style={styles.textDesign}>
          Great! What department do {'\n'}you work in?
        </Text>
        <Button
          text={'Marketing'}
          onPress={() => {
            dispatch(updateDepartment('MARKETING'));
            navigation.navigate('userdetail');
          }}
        />
        <Button
          text={'Sales'}
          onPress={() => {
            dispatch(updateDepartment('SALES'));
            navigation.navigate('userdetail');
          }}
        />
        <Button
          text={'DEVELOPMENT'}
          onPress={() => {
            dispatch(updateDepartment('DEVELOPMENT'));
            navigation.navigate('userdetail');
          }}
        />
      </View>
    </View>
  );
};

export default DepartmentScreen;

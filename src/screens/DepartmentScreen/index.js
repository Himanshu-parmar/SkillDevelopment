import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import Button from '../../components/Button';
import StatusBar from '../../components/StatusBar';
import {getDepartment} from '../../redux/action/action';
import styles from '../../components/Globalstyle/styles';
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
            dispatch(getDepartment('MARKETING'));
            navigation.navigate('userdetail');
          }}
        />
        <Button
          text={'Sales'}
          onPress={() => {
            dispatch(getDepartment('SALES'));
            navigation.navigate('userdetail');
          }}
        />
        <Button
          text={'DEVELOPMENT'}
          onPress={() => {
            dispatch(getDepartment('DEVELOPMENT'));
            navigation.navigate('userdetail');
          }}
        />
      </View>
    </View>
  );
};

export default DepartmentScreen;

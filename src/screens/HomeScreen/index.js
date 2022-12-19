import React from 'react';
import {Text, View, Image} from 'react-native';
import {useDispatch} from 'react-redux';

import Button from '../../components/Button';
import Statusbar from '../../components/StatusBar';
import {getDevelopment} from '../../redux/action/action';
import styles from '../../components/Globalstyle/styles';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require('../../assests/images.png')}
          style={styles.cancelIcon}
        />
        <Statusbar />
        <Text style={styles.textDesign}>
          {' '}
          Welcome! 😊 What are you {'\n'} looking for ?{' '}
        </Text>
        <Button
          text={'APP DEVELOPMENT'}
          onPress={() => {
            dispatch(getDevelopment('App DEVELOPMENT'));
            navigation.navigate('department');
          }}
        />
        <Button
          text={'WEB DEVELOPMENT'}
          onPress={() => {
            dispatch(getDevelopment('WEB DEVELOPMENT'));
            navigation.navigate('department');
          }}
        />
        <Button
          text={'BACKEND DEVELOPMENT'}
          onPress={() => {
            dispatch(getDevelopment('BACKEND DEVELOPMENT'));
            navigation.navigate('department');
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

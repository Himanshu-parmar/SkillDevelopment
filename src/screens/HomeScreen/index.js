import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Button from '../../components/Button';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textDesign}>
          {' '}
          Welcome! What are you {'\n'} looking for ?{' '}
        </Text>
        <Button
          text={'APP DEVELOPMENT'}
          onPress={() => navigation.navigate('department')}
        />
        <Button text={'WEB DEVELOPMENT'} />
        <Button text={'BACKEND DEVELOPMENT'} />
      </View>
    </View>
  );
};

export default HomeScreen;

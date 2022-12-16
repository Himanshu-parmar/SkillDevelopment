import React from 'react';
import {Text, View} from 'react-native';

import Button from '../../components/Button';
import styles from './styles';

const DepartmentScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textDesign}>
          Great! What department do {'\n'}you work in?
        </Text>
        <Button
          text={'Marketing'}
          onPress={() => navigation.navigate('userdetail')}
        />
        <Button text={'Sales'} />
        <Button text={'DEVELOPMENT'} />
      </View>
    </View>
  );
};

export default DepartmentScreen;

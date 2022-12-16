import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

const Textheader = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textDesign}>{text}</Text>
      </View>
    </View>
  );
};
export default Textheader;

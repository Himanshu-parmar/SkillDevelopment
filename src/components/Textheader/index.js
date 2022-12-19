import React from 'react';
import {Text} from 'react-native';

import styles from './styles';

const Textheader = ({text}) => {
  return <Text style={styles.textDesign}>{text}</Text>;
};
export default Textheader;

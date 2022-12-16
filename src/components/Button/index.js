import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import styles from './styles';

const Button = props => {
  const {text, onPress} = props;
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;

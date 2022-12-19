import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './Globalstyle/styles';

const Textinput = Props => {
  const {text, placeholder, onChangeText, defaultValue, onBlur, warning} =
    Props;
  return (
    <>
      <View style={styles.inputTextTitle}>
        <Text>{text}</Text>
      </View>
      <TextInput
        placeholder={placeholder}
        style={styles.textField}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
        onBlur={onBlur}
      />
      <Text style={styles.errorMsg}>{warning}</Text>
    </>
  );
};

export default Textinput;

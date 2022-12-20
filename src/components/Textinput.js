import React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import styles from './../constant/Globalstyle/styles';

const Textinput = Props => {
  const {
    text,
    placeholder,
    onChangeText,
    defaultValue,
    onBlur,
    warning,
    label,
    activeOutlineColor,
  } = Props;
  return (
    <>
      <View style={styles.inputTextTitle}>
        <Text>{text}</Text>
      </View>
      <TextInput
        mode="outlined"
        label={label}
        placeholder={placeholder}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
        onBlur={onBlur}
        activeOutlineColor={activeOutlineColor}
      />
      <Text style={styles.errorMsg}>{warning}</Text>
    </>
  );
};

export default Textinput;

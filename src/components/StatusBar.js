import React from 'react';
import {View, StyleSheet} from 'react-native';

const Statusbar = () => {
  return <View style={styles.bar} />;
};
const styles = StyleSheet.create({
  bar: {
    marginTop: '5%',
    marginHorizontal: '20%',
    borderColor: 'rgb(160,243,219)',
    borderWidth: 2,
    paddingVertical: 3,
    width: '120%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'rgb(160,243,219)',
    top: 20,
    right: '30%',
  },
});
export default Statusbar;

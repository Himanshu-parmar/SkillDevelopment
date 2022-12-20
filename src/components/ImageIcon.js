import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from '../constant/Globalstyle/styles';

const ImageIcon = Props => {
  return (
    <>
      <Image
        source={require('./../assests/images.png')}
        style={styles.cancelIcon}
      />
      <TouchableOpacity onPress={Props.onPress}>
        <Image
          source={require('./../assests/left-double.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
    </>
  );
};

export default ImageIcon;

import {Platform} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

const Fonts = {
  fontSize_6:
    Platform.OS === 'android' ? RFPercentage(0.008) : RFPercentage(0.005),
  fontSize_7:
    Platform.OS === 'android' ? RFPercentage(1.05) : RFPercentage(0.75),
  fontSize_8: Platform.OS === 'android' ? RFPercentage(1.3) : RFPercentage(1),
  fontSize_9: Platform.OS === 'android' ? RFPercentage(1.8) : RFPercentage(1.4),
  fontSize_10:
    Platform.OS === 'android' ? RFPercentage(1.8) : RFPercentage(1.5),
  fontSize_10_5:
    Platform.OS === 'android' ? RFPercentage(2) : RFPercentage(1.62),
  fontSize_11:
    Platform.OS === 'android' ? RFPercentage(2.05) : RFPercentage(1.75),
  fontSize_11_5:
    Platform.OS === 'android' ? RFPercentage(2.17) : RFPercentage(1.87),
  fontSize_12: Platform.OS === 'android' ? RFPercentage(2.3) : RFPercentage(2),
  fontSize_12_5:
    Platform.OS === 'android' ? RFPercentage(2.45) : RFPercentage(2.15),
  fontSize_13:
    Platform.OS === 'android' ? RFPercentage(2.6) : RFPercentage(2.3),
  fontSize_13_3:
    Platform.OS === 'android' ? RFPercentage(2.65) : RFPercentage(2.35),
  fontSize_13_5:
    Platform.OS === 'android' ? RFPercentage(2.7) : RFPercentage(2.4),
  fontSize_14:
    Platform.OS === 'android' ? RFPercentage(2.8) : RFPercentage(2.5),
  fontSize_14_5:
    Platform.OS === 'android' ? RFPercentage(2.9) : RFPercentage(2.6),
  fontSize_15:
    Platform.OS === 'android' ? RFPercentage(3.05) : RFPercentage(2.75),
  fontSize_16: Platform.OS === 'android' ? RFPercentage(3.3) : RFPercentage(3),
  fontSize_17:
    Platform.OS === 'android' ? RFPercentage(3.55) : RFPercentage(3.25),
  fontSize_18:
    Platform.OS === 'android' ? RFPercentage(3.8) : RFPercentage(3.5),
  fontSize_20: Platform.OS === 'android' ? RFPercentage(4.3) : RFPercentage(4),
  fontSize_21:
    Platform.OS === 'android' ? RFPercentage(4.5) : RFPercentage(4.3),
  fontSize_24: Platform.OS === 'android' ? RFPercentage(5.2) : RFPercentage(5),
  fontSize_25:
    Platform.OS === 'android' ? RFPercentage(5.5) : RFPercentage(5.5),
  fontSize_45:
    Platform.OS === 'android' ? RFPercentage(7.3) : RFPercentage(6.5),
  fontSize_50:
    Platform.OS === 'android' ? RFPercentage(8.3) : RFPercentage(7.5),
  fontSize_65: Platform.OS === 'android' ? RFPercentage(9.5) : RFPercentage(9),
  fontFamily_bold: 'DMSans-Bold',
  fontFamily_extra_bold: '',
  fontFamily_med: 'DMSans-Medium',
  fontFamily_reg: '',
  fontFamily_reg_italic: '',
  fontFamily_semi_bold: '',
};
export default Fonts;

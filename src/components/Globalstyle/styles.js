import {StyleSheet} from 'react-native';
import Fonts from '../../constant/Fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(244,246,248)',
    height: '100%',
    width: '100%',
  },
  innerContainer: {
    marginHorizontal: '10%',
  },
  textDesign: {
    marginTop: '40%',
    fontSize: Fonts.fontSize_16,
    fontWeight: '400',
    color: 'rgb(36,38,39)',
    textAlign: 'left',
    left: 10,
  },
  textField: {
    paddingVertical: 15,
    marginTop: 30,
    paddingLeft: 10,
    borderColor: 'grey',
    borderWidth: 1,
  },
  inputTextTitle: {
    top: 30,
  },
  cancelIcon: {
    height: 15,
    width: 15,
    marginTop: 55,
    left: '100%',
    color: 'black',
  },
  backIcon: {
    height: 15,
    width: 15,
    bottom: 21,
  },
  errorMsg: {
    color: 'red',
  },
});
export default styles;

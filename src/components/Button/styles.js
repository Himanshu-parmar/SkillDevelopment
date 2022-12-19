import {StyleSheet} from 'react-native';
import Colors from '../../constant/colors';

const styles = StyleSheet.create({
  button: {
    marginTop: '5%',
    marginHorizontal: '20%',
    borderColor: 'rgb(164,34,232)',
    borderWidth: 2,
    paddingVertical: 12,
    width: '90%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.buttoncolor,
    top: 20,
    right: '11%',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
export default styles;

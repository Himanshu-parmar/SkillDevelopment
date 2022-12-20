import {StyleSheet, Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const styless = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: HEIGHT - 400,
    paddingTop: '10%',
    backgroundColor: 'grey',
    borderRadius: 10,
    width: WIDTH - 60,
    top: '10%',
  },
  close: {
    color: 'rgb(164,34,232)',
    left: '30%',
    fontSize: 20,
    top: '150%',
  },
  heading: {
    fontSize: 20,
    marginHorizontal: 20,
  },
  storeData: {
    top: 20,
    fontSize: 18,
    marginHorizontal: 20,
  },
});
export default styless;

import {StyleSheet, Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const styless = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: 500,
    paddingTop: 30,
    backgroundColor: 'grey',
    borderRadius: 10,
    width: WIDTH - 60,
    top: 100,
  },
  close: {
    color: 'rgb(164,34,232)',
    left: 100,
    fontSize: 20,
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

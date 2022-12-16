import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DepartmentScreen from '../screens/DepartmentScreen';
import GetUserDetail from '../screens/GetUserDetail';
import GetInfo from '../screens/GetInfo';
import GetMoreInfo from '../screens/GetMoreInfo';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="department" component={DepartmentScreen} />
        <Stack.Screen name="userdetail" component={GetUserDetail} />
        <Stack.Screen name="getinfo" component={GetInfo} />
        <Stack.Screen name="GetMoreInfo" component={GetMoreInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;

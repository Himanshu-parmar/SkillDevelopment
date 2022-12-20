import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import DepartmentScreen from '../screens/DepartmentScreen';
import ContactScreen from '../screens/ContactScreen';
import PersonalDetail from '../screens/PersonalDetail';
import ThankyouScreen from '../screens/ThankyouScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={WelcomeScreen} />
        <Stack.Screen name="department" component={DepartmentScreen} />
        <Stack.Screen name="userdetail" component={ContactScreen} />
        <Stack.Screen name="getinfo" component={PersonalDetail} />
        <Stack.Screen name="GetMoreInfo" component={ThankyouScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;

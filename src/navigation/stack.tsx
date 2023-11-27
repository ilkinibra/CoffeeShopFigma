import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from '../views/Onboarding';
import React from 'react';
import Home from '../views/Home';
import { BottomNavigator } from './bottom';

const Stack = createStackNavigator();

export const StackNavigator = ()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false,}}
      name='Onboarding' component={Onboarding}/> 
        <Stack.Screen name='BottomView' component={BottomNavigator}/> 
    </Stack.Navigator>
  );
};
import React from'react'; 
 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Home from '../views/Home'; 
import Favorite from '../views/Favorite';
 
 
 
 
 
 
const Bottom =createBottomTabNavigator(); 
 
export const BottomNavigator =()=> { 
    return( 
<Bottom.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'> 
    <Bottom.Screen name="Home" component={Home} /> 
    <Bottom.Screen name="Favorite" component={Favorite} /> 
</Bottom.Navigator> 
   ); 
     
};
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StackNavigator } from "./navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App =()=>{
  return(
    <SafeAreaProvider>
     <NavigationContainer>
      <StackNavigator></StackNavigator>
     </NavigationContainer>
    </SafeAreaProvider>
  )
};

export default App;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './component/Tabs.js'; 

import Secondscreen from './screens/Secondscreen';
import Categories from './screens/Categories';
import Cartlist from './screens/Cartlist';
import Shoedetail from './screens/Shoedetail';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      

      <Stack.Navigator initialRouteName="Secondscreen">
        <Stack.Screen name="Secondscreen" component={Secondscreen} options={{headerShown: false}}/>
        <Stack.Screen name ="Categories"  component ={Categories} options={{headerShown: false}} />
        <Stack.Screen name ="Cartlist"  component ={Tabs} options={{headerShown: false}} />
        <Stack.Screen name ="Shoedetail"  component ={Shoedetail} options={{headerShown: false}} />
      </Stack.Navigator>

      
    </NavigationContainer>
  );
}





const styles = StyleSheet.create({
 

  scrollContainer:{
    
   
  },
  

  
});

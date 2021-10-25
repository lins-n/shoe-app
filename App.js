import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './component/Tabs.js'; 

import Secondscreen from './screens/Secondscreen';
import Categories from './screens/Categories';
import Cartlist from './screens/Cartlist';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      

      <Stack.Navigator initialRouteName="Secondscreen">
        <Stack.Screen name="Secondscreen" component={Secondscreen} options={{headerShown: false}}/>
        <Stack.Screen name ="Categories"  component ={Categories} options={{headerShown: false}} />
        <Stack.Screen name ="Cartlist"  component ={Tabs} options={{headerShown: false}} />
      </Stack.Navigator>

      
    </NavigationContainer>
  );
}





const styles = StyleSheet.create({
 

  scrollContainer:{
    
   
  },
  

  mainStyle:{
    height: 50, 
    width: "80%",
    
    textAlign:"left",
    fontSize: 20, 
    color:"#8c8c8c",
    },

  
});

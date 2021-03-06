import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './component/Tabs.js'; 

import Landing from './screens/Landing';
import Categories from './screens/Categories';
import Cartlist from './screens/Cartlist';
import Shoedetail from './screens/Shoedetail';
import Drawer from './screens/Drawer';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Checkout from './screens/Checkout';
import Thanks from './screens/Thanks';
import showAlert from './screens/Checkout';
import showAl from './screens/Drawer';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
        <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
        <Stack.Screen name ="Categories"  component ={Categories} options={{headerShown: false}} />
        <Stack.Screen name ="Cartlist"  component ={Cartlist} options={{headerShown: false}} />
        <Stack.Screen name ="Shoedetail"  component ={Shoedetail} options={{headerShown: false}} />
        <Stack.Screen name ="Drawer"  component ={Drawer} options={{headerShown: false, headerStyle:{ backgroundColor:'#f2f6f7'} }} />
        <Stack.Screen name ="Login"  component ={Login} options={{headerShown: false}} />
        <Stack.Screen name ="Signup"  component ={Signup} options={{headerShown: false}} />
        <Stack.Screen name ="Checkout"  component ={Checkout} options={{headerShown: false}} />
        <Stack.Screen name ="Thanks"  component ={Thanks} options={{headerShown: false}} />
        <Stack.Screen name ="showAlert"  component ={showAlert} options={{headerShown: false}} />
        <Stack.Screen name ="showAl"  component ={showAl} options={{headerShown: false}} />
      </Stack.Navigator>

    </NavigationContainer>
    
    
    
    
  );
}








const styles = StyleSheet.create({
 

  scrollContainer:{
    
   
  },
  

  
});

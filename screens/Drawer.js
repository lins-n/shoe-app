import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Categories from '../screens/Categories';
import Secondscreen from '../screens/Secondscreen';
import Cartlist from '../screens/Cartlist';
import Tabs from '../component/Tabs';

const Drawer = createDrawerNavigator();

function Drawers() {
  return (
    <Drawer.Navigator >
        <Drawer.Screen name="Categories" component={Tabs}/>
        <Drawer.Screen name="Cartlist" component={Tabs} />

       
      </Drawer.Navigator>

       
  );
}

  export default Drawers;
  
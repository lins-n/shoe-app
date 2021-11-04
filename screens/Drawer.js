import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import Tabs from '../component/Tabs';

const Drawer = createDrawerNavigator();

function Drawers() {
  return (
    <Drawer.Navigator >
        <Drawer.Screen name="Categories" component={Tabs}
        options={{
        title:' ' , 
        headerStyle:{ backgroundColor:'white'} ,
        headerTitle: ()=> ( 
          <TouchableOpacity style={styles.buttonCatnew} >
          <TextInput style={{color:"#d9d9d9", fontSize:15,paddingLeft:10, }}>Search</TextInput> 
          </TouchableOpacity>
          ),

        headerRight: () => (
          <Icon name='bell' type='font-awesome' color='black' size='15'  style={{alignContent:'center',alignItems:'center',paddingTop:1 , paddingRight: 30}}/>
        ),
      }}/>
        <Drawer.Screen name="Cartlist" component={Tabs} />

       
      </Drawer.Navigator>

       
  );
}


const styles =StyleSheet.create({

  buttonCatnew:{
    width:250,
    height:35,
    justifyContent:'center',
    borderRadius:10, 
    backgroundColor:"#fafafa",
    textAlign: "center" ,
    marginLeft:5,
    marginTop:0,
    marginBottom:5,
    
  },
});

  export default Drawers;
  
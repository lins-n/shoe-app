import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import Tabs from '../component/Tabs';
import Cartlist from './Cartlist';

const Drawer = createDrawerNavigator();
const showAl = ({navigation}) =>
  Alert.alert(
    "New Notification",
    "You have 1 new notification  ",
    
    [
      {
        text: "Done",
        
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );


function Drawers() {
  return (
    <Drawer.Navigator >
        <Drawer.Screen name="Categories" component={Tabs}
        options={{
        title:' itFits' ,
        headerTitleStyle : {
          fontWeight: 'bold',
          fontSize: 20,
          color: '#0095e6',

        } , 
        headerStyle:{ backgroundColor:'white'} ,
        headerRight: () => (
          <Icon name='bell' type='font-awesome' color='black' size='15'  style={{alignContent:'center',alignItems:'center',paddingTop:1 , paddingRight: 30}}
          onPress={showAl}
          />
        ),
      }}/>
        <Drawer.Screen name="Cartlist" component={Cartlist} options={{
        title:'Cartlist' , 
      }} />

       
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
  
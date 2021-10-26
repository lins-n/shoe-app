import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Icon } from 'react-native-elements'
import Categories from '../screens/Categories';
import Secondscreen from '../screens/Secondscreen';
import Cartlist from '../screens/Cartlist';
import {StyleSheet, View} from 'react-native';
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Categories} style={styles.tabScreen}
         options={{ tabBarLabel:() => {return null}, headerShown: false , tabBarIcon: ({color}) => 
         <Icon name='home' type='font-awesome' size='30' color='#b3b3b3'  style={styles.iconStyle} /> }}  />

        <Tab.Screen name="Main" component={Secondscreen} 
        options={{tabBarLabel:() => {return null}, headerShown: false , tabBarIcon: ({color}) => 
        <View style={styles.iconStyle1} >
          <Icon reverse name='plus' type='font-awesome' color='#00ace6' size= '27'  />
        </View>
        }} />

        <Tab.Screen name="Shop" component={Cartlist} 
        options={{tabBarLabel:() => {return null},  headerShown: false, tabBarIcon: ({color}) =>
         <Icon name='shopping-bag' type='font-awesome' color='#b3b3b3' style={styles.iconStyle} />}} />
      </Tab.Navigator>
    );
  }
 

  const styles= StyleSheet.create({

    iconStyle:{
      paddingTop:20,
      
    },

    iconStyle1:{
      paddingBottom:50,
      shadowColor: 'black',
      shadowOpacity: 0.5,
      shadowRadius: 5,
      
      shadowOffset: {
          width: 0,            
          height: 2,           
      },
      
    },

    tabScreen:{
      color:'#f3f3f3',
    },

  });
  export default Tabs;
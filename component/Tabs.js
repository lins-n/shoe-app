import React,{ useState } from 'react';
import Modal from "react-native-modal";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon ,Button,  Text, } from 'react-native-elements'
import Categories from '../screens/Categories';
import Cartlist from '../screens/Cartlist';
import {StyleSheet, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Landing from '../screens/Landing';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Drawer from '../screens/Signup';
import Checkout from '../screens/Checkout';

const Tab = createBottomTabNavigator();



const Tabs = ({navigation}) => {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  
    return (

      
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Categories} style={styles.tabScreen}
         options={{ tabBarLabel:() => {return null}, headerShown: false , tabBarIcon: ({color}) => 
         <Icon name='home' type='font-awesome' size='30' color='#b3b3b3'  style={styles.iconStyle} /> }}  />

        <Tab.Screen name="Main" component={Categories} 
        options={{tabBarLabel:() => {return null}, headerShown: false , tabBarIcon: ({color}) => 
        <View style={styles.iconStyle1} >
          <Icon reverse name='plus' type='font-awesome' color='#00ace6' size= '30' onPress={toggleModal} />

              <View style={{ flex: 1 , justifyContent:'center',}}>
          <Button title="Show modal" onPress={toggleModal} />

          <Modal isVisible={isModalVisible}>
            <View style={{ flex: 1 }}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <TouchableOpacity style={styles.modalContainer} onPress={() => navigation.push('Landing')}>
                  <Text style={{textAlign:'center', fontSize:17, paddingTop:7,}}>Landing Page!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalContainer} onPress={() => navigation.push('Login')}>
                  <Text style={{textAlign:'center',fontSize:17, paddingTop:7,}}>Login!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalContainer} onPress={() => navigation.push('Signup')}>
                  <Text style={{textAlign:'center',fontSize:17, paddingTop:7,}}>Sign Up!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalContainer} onPress={() => navigation.push('Drawer')}>
                  <Text style={{textAlign:'center',fontSize:17, paddingTop:7,}}>Home!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalContainer} onPress={() => navigation.push('Checkout')}>
                  <Text style={{textAlign:'center',fontSize:17, paddingTop:7,}}>Checkout!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={toggleModal}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                </TouchableOpacity>
            </View>
            </View>
              

             
            </View>
          </Modal>
        </View>


        </View>

        
        }} />

        <Tab.Screen name="Shop" component={Cartlist} 
        options={{tabBarLabel:() => {return null},  headerShown: false, tabBarIcon: ({color}) =>
         <Icon name='shopping-bag' type='font-awesome' color='#b3b3b3' style={styles.iconStyle} />}} />
      </Tab.Navigator>
    );
  }
 

  const styles= StyleSheet.create({
    
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalContainer: {
        backgroundColor: "#f2f2f2",
        borderRadius:25,
        padding: 10,
        marginVertical:5,
        width: 200,
        height: 50,
      },

      textStyle: {
        color: "white",
        fontWeight: "bold",
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      buttonClose: {
        backgroundColor: "#00ace6",
      },
      button: {
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        marginTop:20,
      },

    iconStyle:{
      paddingTop:20,
      
    },

    iconStyle1:{
      paddingBottom:50,
      marginLeft:23,
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
import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import check from '../assets/check.jpg';




function Thanks({navigation}) {
    return (
       
        <View style={{justifyContent:'center', alignContent:'center',backgroundColor:'white'}}>
        <TouchableOpacity style={styles.roundShape}>
        <TouchableOpacity style={styles.roundShape1}>
        <TouchableOpacity style={styles.roundShape2}>
        <Image source={check} style={{ height:70, width:70, borderRadius:100,}} />
        </TouchableOpacity>
        </TouchableOpacity>
        </TouchableOpacity>

        <Text style={{textAlign:'center', fontSize:20, marginRight:10, }}> ALL  DONE!</Text>

            <TouchableOpacity style={styles.button1} >
                <Text   onPress={() => navigation.push('Drawer')}
                style={{color:"white", fontSize:20, fontWeight: 'bold', textAlign:'center',}}>
                <Icon name='home' type='font-awesome' size='30' color='white' style={{paddingLeft:48,paddingTop:5}} />
                </Text> 
            </TouchableOpacity>
        </View>

       
    );
}


const styles = StyleSheet.create({
        roundShape:{
          alignSelf:'center',
          marginBottom:20,
          borderRadius:150,
          backgroundColor:'#4dd2ff',
          width:170,
          height:170,
          marginTop:300,
        },
    
        roundShape1:{
          alignSelf:'center',
          borderRadius:150,
          backgroundColor:'#99e6ff',
          width:120,
          height:120,
          marginTop:25,
        },
    
        roundShape2:{
          alignSelf:'center',
          borderRadius:150,
          backgroundColor:'#d9d9d9',
          width:70,
          height:70,
          marginTop:25,
        },

        button1:{
  
            height:60,
            justifyContent:'center',
            borderRadius:20, 
            backgroundColor:"#00ace6", 
            alignSelf:"center", 
            textAlign: "center" ,
            width:"30%",
            marginTop:220,
            marginBottom:100,
            
          },

  });
  


export default Thanks;


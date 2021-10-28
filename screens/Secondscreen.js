
import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import logo from '../assets/logo.png';

function Secondscreen({navigation}) {
    return (
      // GOOD
    
  
  
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'white'}}>
        
        
        
        <Text style={{fontSize:25, color:"#999999", marginTop:30}}> Welcome to </Text>
        
        <Text style={styles.mainStylenew}> itFits</Text>

        <TouchableOpacity style={styles.roundShape}>
        <TouchableOpacity style={styles.roundShape1}>
        <TouchableOpacity style={styles.roundShape2}>
        <Image source={logo} style={{ height:200, width:200, borderRadius:100}} />
        </TouchableOpacity>
        </TouchableOpacity>
        </TouchableOpacity>
  

            <Text style={{fontSize:30, fontWeight: 'bold'}}> Discover your</Text>
            <Text style={{fontSize:30, fontWeight:'bold',paddingBottom:20}}> Dream Shoe Here</Text>
            <Text style={{fontSize:15,color:'#737373' }}>Explore all the most exciting shoes </Text>
            <Text style={{fontSize:15,paddingBottom:50, color:'#737373' }}>based on your interests and favourite brands </Text>
            
          <View style={styles.buttonsMain}>
            <TouchableOpacity onPress={() => navigation.push('Drawer')} style={styles.button} >
            <Text   
            style={{color:"black", fontSize:20, fontWeight: 'bold', textAlign:'center'}}>Login</Text> 
            </TouchableOpacity>
      
          
            <TouchableOpacity  onPress={() => navigation.push('Drawer')} style={styles.button1} >
            <Text  
            style={{color:"white", fontSize:20, fontWeight: 'bold', textAlign:'center'}}>Signup</Text> 
            </TouchableOpacity>
          </View>
            <Text style={{fontSize:15, color:"#999999", marginTop:9}}> Not a member? 
            <Text onPress={() => navigation.push('HomeScreen')} style={{fontWeight:'bold', color:'#00ace6'}}>Sign up</Text>
            </Text>
  
        
        
      </View>
    );
  }

  export default Secondscreen;


  const styles = StyleSheet.create({
    imgStyletop:{
      width: 250, 
      height: 250, 
      borderRadius:25, 
      marginRight:15, 
      transform: [{rotate:"-35deg"}],
      
  
    
    },
    roundShape:{
      alignSelf:'center',
      marginBottom:50,
      borderRadius:150,
      backgroundColor:'#4dd2ff',
      width:300,
      height:300,
      
    },

    roundShape1:{
      alignSelf:'center',
      borderRadius:150,
      backgroundColor:'#99e6ff',
      width:250,
      height:250,
      marginTop:25,
    },

    roundShape2:{
      alignSelf:'center',
      borderRadius:150,
      backgroundColor:'#d9d9d9',
      width:200,
      height:200,
      marginTop:25,
    },


    mainStylenew:{
      height: 50,
      width: "80%",
      marginBottom:"10%" , 
      textAlign:"center",
      fontSize: 30, 
      fontWeight: 'bold', color:"#262626",
      },

      button:{
  
        height:60, 
        justifyContent:'center',
        borderRadius:15, 
        backgroundColor:"#f2f2f2", 
        alignSelf:"center", 
        textAlign: "center" ,
        width:"40%",
        marginTop:5,
        marginRight:15,
        
      },
      buttonsMain:{
        flexDirection:'row',
        alignItems:'center',
      },

      button1:{
  
        height:58,
        justifyContent:'center',
        borderRadius:15, 
        backgroundColor:"#00ace6", 
        alignSelf:"center", 
        textAlign: "center" ,
        width:"40%",
        
      },
  });
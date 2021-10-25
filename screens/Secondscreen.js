
import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';


function Secondscreen({navigation}) {
    return (
      // GOOD
    
  
  
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'white'}}>
        
        
        
        <Text style={{fontSize:25, color:"#999999", marginTop:20}}> Welcome to </Text>
        
        <Text style={styles.mainStylenew}> Collins Shoe App </Text>

        <TouchableOpacity style={styles.roundShape}>
        <TouchableOpacity style={styles.roundShape1}>
        <TouchableOpacity style={styles.roundShape2}></TouchableOpacity>
        </TouchableOpacity>
        </TouchableOpacity>
  
            <TouchableOpacity style={styles.button} >
            <Text   onPress={() => navigation.push('Cartlist')}
            style={{color:"white", fontSize:20, fontWeight: 'bold', }}>                  Sign in with Google</Text> 
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button1} >
            <Text   onPress={() => navigation.push('Cartlist')}
            style={{color:"white", fontSize:20, fontWeight: 'bold', }}>                   Sign in with Apple</Text> 
            </TouchableOpacity>
            <Text style={{fontSize:15, color:"#999999", marginTop:9}}> Not a member? 
            <Text onPress={() => navigation.push('HomeScreen')} style={{fontWeight:'bold', color:'#ff8000'}}>Sign up</Text>
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
      marginBottom:30,
      borderRadius:150,
      backgroundColor:'#f2f2f2',
      width:300,
      height:300,
    },

    roundShape1:{
      alignSelf:'center',
      borderRadius:150,
      backgroundColor:'#e6e6e6',
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
      marginBottom:"1%" , 
      textAlign:"center",
      fontSize: 30, 
      fontWeight: 'bold', color:"#262626",
      },

      button:{
  
        height:60, 
        justifyContent:'center',
        borderRadius:15, 
        backgroundColor:"#e65c00", 
        alignSelf:"center", 
        textAlign: "center" ,
        width:"80%",
        marginTop:5,
        
      },

      button1:{
  
        height:60,
        justifyContent:'center',
        borderRadius:15, 
        backgroundColor:"#1a1a1a", 
        alignSelf:"center", 
        textAlign: "center" ,
        width:"80%",
        marginTop:15,
        
      },
  });
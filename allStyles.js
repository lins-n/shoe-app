import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';



const  allStyles = {
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

        
    }
    
    export default allStyles;
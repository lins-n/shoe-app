import React from 'react';
import { Image, StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../assets/logo.png';


function Login({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1,backgroundColor:'white', justifyContent:'center' }} >
      <View style={{  alignItems: 'center',}}>

        <TouchableOpacity style={styles.roundShape}>
        <TouchableOpacity style={styles.roundShape1}>
        <TouchableOpacity style={styles.roundShape2}>
        <Image source={logo} style={{ height:70, width:70, borderRadius:100}} />
        </TouchableOpacity>
        </TouchableOpacity>
        </TouchableOpacity>
  
        <Text style={styles.mainStyled}> Hi, there ! </Text>
  
        <Text style={{color:"#00ace6", marginBottom:50, }}> Welcome back! we missed you </Text>
          <TouchableOpacity style={styles.buttonCatnew} >
          <TextInput style={{color:"#8c8c8c", fontSize:15, paddingLeft:10, }} placeholder=' Email'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCatnew} >
          <TextInput secureTextEntry={true} keyboardType="default" style={{color:"#8c8c8c", fontSize:15, paddingLeft:10, }} placeholder=' Password'/>
          </TouchableOpacity>
          
            
              <TouchableOpacity style={styles.buttonMain}  onPress={() => navigation.push('Drawer')}  >
              <Text  style={{color:"white", fontSize:18, fontWeight: 'bold', textAlign:'center'}}>Login</Text> 
              
              </TouchableOpacity>
            
            <Text style={{color:"#00ace6", marginTop:20, }}> Dont have an account? <Text style={{fontWeight:'bold'}} onPress={() => navigation.push('Signup')}  > Signup </Text>  </Text>
  
  
  
      </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    buttonMain:{
  
        height:55, 
        justifyContent:'center',
        borderRadius:25, 
        backgroundColor:"#00ace6",
        alignContent: 'center',
        width:'80%',
        marginTop:15,
        
      },
      buttonCatnew:{
        width:330,
        height:55,
        justifyContent:'center',
        borderRadius:15, 
        backgroundColor:"#fafafa",
        textAlign: "center" ,
        marginRight:10,
        marginLeft:10,
        marginTop:20,
      },

      mainStyle2:{
        height: 50, 
        width: "80%", 
        borderBottomWidth:1, 
        marginBottom:"5%", 
        fontSize: 20,
        },

      mainStyled:{
        height: 50,
        width: "80%",
        marginTop:"2%" , 
        textAlign:"center",
        fontSize: 40, 
        fontWeight: 'bold', color:"#262626",
        },
        roundShape:{
          alignSelf:'center',
          marginBottom:20,
          borderRadius:150,
          backgroundColor:'#4dd2ff',
          width:170,
          height:170,
          
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

  });
  

  export default Login;
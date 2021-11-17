
import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import logo from '../assets/logo.png';
import img from '../assets/img.jpg';
import allStyles from '../allStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

function Landing({navigation}) {
  
    return (
      // GOOD
    
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'white'}} >
      
      <View style={{ alignItems: 'center', justifyContent: 'center' ,}}>
        
      
        
        <Text style={{fontSize:25, color:"#999999", marginTop:30}}> Welcome to </Text>
        
        <Text style={allStyles.mainStylenew}> itFits</Text>
        <TouchableOpacity style={allStyles.roundShape}>
        <TouchableOpacity style={allStyles.roundShape1}>
        <TouchableOpacity style={allStyles.roundShape2}>
        <Image source={logo} style={{ height:200, width:200, borderRadius:100}} />
        </TouchableOpacity>
        </TouchableOpacity>
        </TouchableOpacity>
  

            <Text style={{fontSize:30, fontWeight: 'bold'}}> Discover your</Text>
            <Text style={{fontSize:30, fontWeight:'bold',paddingBottom:30}}> Dream Shoe Here</Text>
            <Text style={{fontSize:15, color:'#737373' }}>Explore all the most exciting shoes </Text>
            <Text style={{fontSize:15, paddingBottom:40, color:'#737373' }}>based on your interests and favourite brands </Text>
            
          <View style={allStyles.buttonsMain}>
            <TouchableOpacity onPress={() => navigation.push('Login')} style={allStyles.button} >
            <Text   
            style={{color:"black", fontSize:20, fontWeight: 'bold', textAlign:'center'}}>Login</Text> 
            </TouchableOpacity>
      
          
            <TouchableOpacity  onPress={() => navigation.push('Signup')} style={allStyles.button1} >
            <Text  
            style={{color:"white", fontSize:20, fontWeight: 'bold', textAlign:'center'}}>Signup</Text> 
            </TouchableOpacity>
          </View>
  
        
        
      </View>
      </SafeAreaView>
    );
  }

  export default Landing;


  const styles = StyleSheet.create({
    
  });
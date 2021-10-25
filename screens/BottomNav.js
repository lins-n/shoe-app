import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';



function BottomNav({navigation}) {
  return (
    // GOOD
  


    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
          <TouchableOpacity style={styles.button1} >
          <Text   onPress={() => navigation.push('HomeScreen')}
          style={{color:"white", fontSize:20, fontWeight: 'bold', }}>                   Sign in with Apple</Text> 
          </TouchableOpacity>
          
    </View>
  );
}
  
const styles= StyleSheet.create({

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

  export default BottomNav;
  
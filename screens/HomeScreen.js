import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';



function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.mainStyled}> Hi, there ! </Text>
  
        <Text style={{color:"#2eb8b8"}}> Register </Text>
        <TextInput placeholder={"Enter Student Name "} placeholderTextColor="#a6a6a6" style={styles.mainStyle2}/>
        <TextInput placeholder={"Enter Student ID "} placeholderTextColor="#a6a6a6" style={styles.mainStyle2}/>
        <TextInput placeholder={"Enter Course "} placeholderTextColor="#a6a6a6" style={styles.mainStyle2} />
        <TextInput placeholder={"Enter Password "} placeholderTextColor="#a6a6a6" secureTextEntry={true}  style={styles.mainStyle2} />
        <TextInput placeholder={"Verify Password "} placeholderTextColor="#a6a6a6" secureTextEntry={true}   style={styles.mainStyle2}/>
        <Text>...</Text>
        { <Button
          title="Go to Second Screen"
          onPress={() => navigation.push('Secondscreen')}
          /> }
          
      
  
  
            <TouchableOpacity style={styles.buttonMain} >
            <Text  onPress={() => navigation.push('Secondscreen')} style={{color:"white", fontSize:18, fontWeight: 'bold'}}>                 Register             </Text> 
            
            </TouchableOpacity>
  
  
  
  
      </View>
    );
  }

  const styles = StyleSheet.create({
    buttonMain:{
  
        height:50, 
        justifyContent:'center',
        borderRadius:25, 
        backgroundColor:"#2eb8b8", 
        alignSelf:"center", 
        textAlign: "center" ,
        width:"50%",
        marginTop:15,
        
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
  });
  

  export default HomeScreen;
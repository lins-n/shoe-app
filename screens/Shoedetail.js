import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import air from '../assets/air.png';


function Shoedetail({navigation}) {
  return (
    // GOOD
  

<ScrollView style={styles.scrollContainer}>
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'center' ,paddingLeft:17, backgroundColor:'white',paddingTop:20}}>
   
    <View style={styles.categories}> 
    <Icon name='arrow-left' type='feather' color='#b3b3b3' onPress={() => navigation.push('Categories')}   style={{alignContent:'center',alignItems:'center',paddingTop:30 }}/>
    <Text style={styles.fontStyle1}> Shoedetail</Text>
    </View> 
    
    
    <TouchableOpacity style={styles.boxshadow}>
    <View style={styles.container}>
    <View style={styles.container1}>
    <Text style={{paddingTop:0, paddingLeft:15, paddingBottom:7, fontSize:28, fontWeight:'bold'}}>Nike Hourache  </Text>
    <Text style={{ paddingLeft:15, paddingBottom:8, color:'grey'}}>Men Running Shoes </Text>
    <Text style={{fontSize:20, marginLeft:6, fontWeight:'bold'}}>  <Icon name='star' type='font-awesome' color='orange' size='20'  />  4.8 </Text>
    </View>
    <Text style={{fontSize:30, fontWeight:'bold', color:'#0099ff', paddingTop:25, paddingLeft: 70}}> ¢500</Text>
    </View>
    </TouchableOpacity>

    <Image source={air} style={styles.imgStylenew}  /> 
    <Text style={{ paddingLeft:15, paddingBottom:10, paddingTop:10, color:'grey', fontSize:15, fontWeight:'bold'}}>Size</Text>

    <ScrollView>
      <View style={styles.categories}>
      <TouchableOpacity style={styles.buttonCat} >
          <Text 
          style={{color:"#666666", fontSize:20,fontWeight: 'bold',  }}>    9    </Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCatnew} >
          <Text style={{color:"white", fontSize:20,fontWeight: 'bold' }}>    9.5    </Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCat} >
          <Text style={{color:"#666666", fontSize:20, fontWeight: 'bold' }}>    10    </Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCat} >
          <Text style={{color:"#666666", fontSize:20, fontWeight: 'bold'}}>    10.5    </Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCat} >
          <Text style={{color:"#666666", fontSize:20, fontWeight: 'bold'}}>    11    </Text> 
          </TouchableOpacity>
      </View>
      </ScrollView>


    

      
           
    </View>
    </ScrollView>
  );
}
  
const styles= StyleSheet.create({

  categories:{
    flexDirection:'row',
  },
  fontStyle1:{
    fontSize:18, 
    color:"black", 
    marginTop:30, 
    marginLeft:'30%',
    fontWeight:'bold',
  },

  container: {
    
    flexDirection: 'row',
    marginBottom:20,
    marginTop:10,
    
  },

  container1: {
    flexDirection: 'column',
  
  },
  boxshadow:{
    backgroundColor:"white",
    marginTop:10,
    marginBottom:25,
    borderRadius:15, 
  },

  imgStylenew:{
    width: 340, 
    height: 200, 
    borderRadius:25, 
    marginLeft: 15,
    transform:[{ rotateY:'360deg'}],
    marginBottom:30,
  },

  buttonCat:{
  
    height:60,
    justifyContent:'center',
    borderRadius:15, 
    backgroundColor:"#f0fbff",  
    textAlign: "left" ,
    marginBottom:20,
    marginRight:10,
    
  },

  buttonCatnew:{
    height:60,
    justifyContent:'center',
    borderRadius:15, 
    backgroundColor:"#00ace6",  
    textAlign: "left" ,
    marginBottom:20,
    marginRight:10,
    
  },


});

  export default Shoedetail;
  
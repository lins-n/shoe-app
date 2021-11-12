import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button,useState ,StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import air from '../assets/air.png';



function Shoedetail({navigation}) {


  return (
    // GOOD
  

<ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} >
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'center' ,paddingLeft:17, backgroundColor:'white',paddingTop:20}}>
   
    <View style={styles.categories}> 
    <Icon name='arrow-left' type='feather' color='#b3b3b3' onPress={() => navigation.navigate('Drawer')}   style={{alignContent:'center',alignItems:'center',paddingTop:30, paddingBottom:15 }}/>
    
    </View> 
    
    
    <TouchableOpacity style={styles.boxshadow}>
    <View style={styles.container}>
    <View style={styles.container1}>
    <Text style={{paddingTop:0, paddingLeft:15, paddingBottom:7, fontSize:28, fontWeight:'bold'}}>Nike Hourache  </Text>
    <Text style={{ paddingLeft:15, paddingBottom:8, color:'grey'}}>Men Running Shoes </Text>
    <Text style={{fontSize:20, marginLeft:6, fontWeight:'bold'}}>  <Icon name='star' type='font-awesome' color='orange' size='20'  />  4.8 </Text>
    </View>
    <Text style={{fontSize:30, fontWeight:'bold', color:'#00ace6', paddingTop:25, paddingLeft: 70}}> ¢500</Text>
    </View>
    </TouchableOpacity>

    <Image source={air} style={styles.imgStylenew}  /> 
    <Text style={{ paddingLeft:5, paddingBottom:10, paddingTop:10, color:'grey', fontSize:20, fontWeight:'bold'}}>Size</Text>

    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}  >
      
          <TouchableOpacity style={styles.buttonCat} >
          <Text style={{color:"#666666", fontSize:20, fontWeight: 'bold',  }}>    9    </Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCatnew} >
          <Text style={{color:"white", fontSize:20, fontWeight: 'bold' }}>    9.5    </Text> 
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
      
      </ScrollView>


      
      
      <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} >
      
      <TouchableOpacity style={styles.imgBackg} >
      <Image source={air} style={styles.imgStyle2}  /> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.imgBackg} >
      <Image source={air} style={styles.imgStyle3}  /> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.imgBackg} >
      <Image source={air} style={styles.imgStyle2}  /> 
      </TouchableOpacity>
      
      </ScrollView>
      
    <Text style={{ paddingLeft:5, paddingBottom:10, paddingTop:10, color:'grey', fontSize:20, fontWeight:'bold'}}> Quantity </Text>

      <View style={styles.categories1}>
      <TouchableOpacity style={styles.buttontotal} >
          <Text> <Icon name='minus' type='feather' color='black' size='25' style={{paddingLeft:4}} />  </Text> 
      </TouchableOpacity>

      <Text style={{ paddingLeft:15, paddingRight:15, paddingBottom:10, paddingTop:10, color:'#00ace6', fontSize:25, fontWeight:'bold'}}> 5  </Text>

      <TouchableOpacity style={styles.buttontotal} >
      <Text >  <Icon name='plus' type='feather' color='black' size='25'   />  </Text>
      </TouchableOpacity>
      
            <TouchableOpacity  onPress={() => navigation.push('Cartlist')} style={styles.button1} >
            <Text style={{color:"white", fontSize:17, fontWeight: 'bold', textAlign:'center'}}>¢2500 Buy Now</Text> 
            </TouchableOpacity>

      </View>

    

      
           
    </View>
    </ScrollView>
  );
}
  
const styles= StyleSheet.create({

  categories:{
    flexDirection:'row',
  },

  categories1:{
    flexDirection:'row',
    paddingTop:10,
    paddingBottom:90,
    paddingLeft:5,
  },

  button1:{
  
    height:50,
    justifyContent:'center',
    borderRadius:15, 
    backgroundColor:"#00ace6", 
    alignSelf:"center", 
    textAlign: "center" ,
    width:"45%",
    marginLeft:30,
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

  imgStyle2:{
    width: 200, 
    height: 100, 
    borderRadius:25, 
    marginLeft: 15,
    transform:[{ rotateY:'360deg'}],
    marginBottom:0,
  },

  imgStyle3:{
    width: 200, 
    height: 100, 
    borderRadius:25, 
    marginLeft: 15,
    transform:[{ rotateY:'180deg'}],
    marginBottom:0,
  },


  buttonCat:{
  
    height:60,
    justifyContent:'center',
    borderRadius:15, 
    backgroundColor:"#f2f6f7",  
    textAlign: "left" ,
    marginBottom:20,
    marginRight:10,
    
  },

  buttontotal:{
    width:40,
    height:40,
    justifyContent:'center',
    borderRadius:50, 
    backgroundColor:"#f2f6f7",  
    textAlign: "left" ,
    marginRight:10,
    marginTop:5,
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

  imgBackg:{
    height:100,
    justifyContent:'center',
    borderRadius:15, 
    backgroundColor:"#f2f6f7",  
    textAlign: "left" ,
    marginBottom:20,
    marginRight:10,
    marginTop:40,
    
  },


});

  export default Shoedetail;
  
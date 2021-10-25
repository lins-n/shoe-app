import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import air2 from '../assets/air2.png';


function Cartlist({navigation}) {
  return (
    // GOOD
  

<ScrollView style={styles.scrollContainer}>
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'center' ,paddingLeft:17, backgroundColor:'white',paddingTop:20}}>
   
    <View style={styles.categories}> 
    <Icon name='arrow-left' type='feather' color='#b3b3b3' onPress={() => navigation.push('Cartlist')}   style={{alignContent:'center',alignItems:'center',paddingTop:30 }}/>
    <Text style={styles.fontStyle}> Cart List</Text>
    </View> 
    <Text style={{marginLeft:'37%', color:'#b3b3b3', }}> ( 3 Items ) </Text>
    
    <TouchableOpacity style={styles.boxshadow}>
    <View style={styles.container}>
    <TouchableOpacity style={styles.item}>
    <Image source={air2} style={styles.imgStyle} />
    </TouchableOpacity>
    <View style={styles.container1}>
    <Text style={{paddingTop:0, paddingLeft:15, paddingBottom:7, fontSize:18}}>Nike Houraches  <Icon name='trash-2' type='feather' color='orange' size='17' style={{paddingLeft: 100, paddingTop:17}}/></Text>
    <Text style={{ paddingLeft:15, paddingBottom:8, color:'grey'}}>Mountain Bike </Text>
    <Text style={{ paddingLeft:10,fontSize:20, fontWeight:'bold'}}> <Text style={{color:'orange'}}>¢</Text> 1,200.00   <Icon name='minus' type='feather' color='black' size='17' style={{paddingLeft: 80}}/> <Text>1</Text> <Icon name='plus' type='feather' color='orange' size='17' style={{paddingLeft: 10}}/>  </Text>
    </View>
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.boxshadow}>
    <View style={styles.container}>
    <TouchableOpacity style={styles.item}>
    <Image source={air2} style={styles.imgStyle} />
    </TouchableOpacity>
    <View style={styles.container1}>
    <Text style={{paddingTop:0, paddingLeft:15, paddingBottom:7, fontSize:18}}>Nike Houraches  <Icon name='trash-2' type='feather' color='orange' size='17' style={{paddingLeft: 100, paddingTop:17}}/></Text>
    <Text style={{ paddingLeft:15, paddingBottom:8, color:'grey'}}>Mountain Bike </Text>
    <Text style={{ paddingLeft:10,fontSize:20, fontWeight:'bold'}}> <Text style={{color:'orange'}}>¢</Text>1,200.00   <Icon name='minus' type='feather' color='black' size='17' style={{paddingLeft: 80}}/> <Text>1</Text> <Icon name='plus' type='feather' color='orange' size='17' style={{paddingLeft: 10}}/>  </Text>
    </View>
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.boxshadow}>
    <View style={styles.container}>
    <TouchableOpacity style={styles.item}>
    <Image source={air2} style={styles.imgStyle} />
    </TouchableOpacity>
    <View style={styles.container1}>
    <Text style={{paddingTop:0, paddingLeft:15, paddingBottom:7, fontSize:18}}>Nike Houraches  <Icon name='trash-2' type='feather' color='orange' size='17' style={{paddingLeft: 100, paddingTop:17}}/></Text>
    <Text style={{ paddingLeft:15, paddingBottom:8, color:'grey'}}>Mountain Bike </Text>
    <Text style={{ paddingLeft:10,fontSize:20, fontWeight:'bold'}}> <Text style={{color:'orange'}}>¢</Text> 1,200.00   <Icon name='minus' type='feather' color='black' size='17' style={{paddingLeft: 80}}/> <Text>1</Text> <Icon name='plus' type='feather' color='orange' size='17' style={{paddingLeft: 10}}/>  </Text>
    </View>
    </View>
    </TouchableOpacity>

    <View style={styles.container}>
    <TouchableOpacity style={styles.item1}>
    <Text style={{paddingTop:20, paddingLeft:25,  paddingRight:95, paddingBottom:15, fontSize:18, color:'grey'}}>Subtotal <Text style={{ paddingLeft:10,fontSize:20, fontWeight:'bold'}}> <Text style={{color:'orange'}}>$</Text> 1,200.00 </Text> </Text>
    <Text style={{ paddingLeft:25, paddingBottom:8, color:'grey', fontSize:18}}>Shipping Fee <Text style={{ paddingLeft:10,fontSize:20, fontWeight:'bold'}}> <Text style={{color:'orange'}}>$</Text> 1,200.00 </Text>  </Text>
    <Text >.............................................................................................</Text>
    <Text style={{paddingTop:0, paddingLeft:20, paddingBottom:7,fontSize:20, fontWeight:'bold'}}>Total  <Text style={{paddingLeft: 250, paddingTop:17}} >$3,500.00</Text> </Text>
    </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.button1} >
            <Text   onPress={() => navigation.push('Cartlist')}
            style={{color:"white", fontSize:20, fontWeight: 'bold', }}>               Process to Checkout</Text> 
            </TouchableOpacity>
    

      
           
    </View>
    </ScrollView>
  );
}
  
const styles= StyleSheet.create({

  categories:{
    flexDirection:'row',
  },
  fontStyle:{
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
    marginBottom:5,
    borderRadius:15, 
    shadowColor: '#cccccc',
      shadowOpacity: 0.3,
      shadowRadius: 10,
      
      shadowOffset: {
          width: 0,            
          height: 5,           
      },
      
    
  },

  item: {
    width: '22%' ,
    height:'90%',
    backgroundColor:"#f2f2f2",
    borderRadius:15,
    marginTop: 15,
    marginLeft:10,
  },

  item1: {
    height:180,
  borderRadius:25, 
  backgroundColor:"#f2f2f2", 
  textAlign: "center" ,
  width:"95%",
  marginTop:15,
  marginBottom:20,
  },

  imgStyle:{
    width: 70, 
    height: 70, 
    marginTop:11,
    marginLeft:9,
  },
  textColor:{
    color:'black', 
    paddingTop:20,
    paddingLeft:20,
    fontSize:17,
},
textColor1:{
  color:'grey',
  paddingLeft:20,
  paddingBottom:8,
  fontSize:13,
},
textColor2:{
  color:'black',
  paddingLeft:0,
  fontSize:18,
  fontWeight:'bold'
},
button1:{
  
  height:60,
  justifyContent:'center',
  borderRadius:15, 
  backgroundColor:"#ff751a", 
  alignSelf:"center", 
  textAlign: "center" ,
  width:"80%",
  marginTop:15,
  marginBottom:100,
  marginRight:18,
},

});

  export default Cartlist;
  
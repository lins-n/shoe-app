import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import air2 from '../assets/air2.png';


function Cartlist({navigation}) {
  const [input,setInput,] = React.useState("");
  return (
    // GOOD
  
<SafeAreaView>
<ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} >
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'center' ,paddingLeft:20, backgroundColor:'white',paddingTop:10}}>
   
    <View style={styles.categories}> 
    <Icon name='arrow-left' type='feather' color='#b3b3b3' onPress={() => navigation.navigate('Drawer')}   style={{alignContent:'center',alignItems:'center',paddingTop:0 }}/>
    <Text style={{marginLeft:'33%', color:'#b3b3b3', }}> ( 3 Items ) </Text>
    </View> 
    
    
    <TouchableOpacity style={styles.boxshadow}>
    <View style={styles.container}>
    <TouchableOpacity style={styles.item}>
    <Image source={air2} style={styles.imgStyle} />
    </TouchableOpacity>
    <View style={styles.container1}>
    <Text style={{paddingTop:0, paddingLeft:15, paddingBottom:7, fontSize:18,}}>Nike Houraches  <Icon name='trash-2' type='feather' color='#00ace6' size='17' style={{paddingLeft: 90, paddingTop:17}}/></Text>
    <Text style={{ paddingLeft:15, paddingBottom:8, color:'grey'}}>Mountain Bike </Text>
    <Text style={{ paddingLeft:10,fontSize:20, fontWeight:'bold'}}> <Text style={{color:'#00ace6'}}>¢</Text> 700.00   <Icon name='minus' type='feather' color='black' size='17' style={{paddingLeft: 85}}/> <Text>1</Text> <Icon name='plus' type='feather' color='#00ace6' size='17' style={{paddingLeft: 10}}/>  </Text>
    </View>
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.boxshadow}>
    <View style={styles.container}>
    <TouchableOpacity style={styles.item}>
    <Image source={air2} style={styles.imgStyle} />
    </TouchableOpacity>
    <View style={styles.container1}>
    <Text style={{paddingTop:0, paddingLeft:15, paddingBottom:7, fontSize:18,}}>Nike Houraches  <Icon name='trash-2' type='feather' color='#00ace6' size='17' style={{paddingLeft: 90, paddingTop:17}}/></Text>
    <Text style={{ paddingLeft:15, paddingBottom:8, color:'grey'}}>Mountain Bike </Text>
    <Text style={{ paddingLeft:10,fontSize:20, fontWeight:'bold'}}> <Text style={{color:'#00ace6'}}>¢</Text>700.00   <Icon name='minus' type='feather' color='black' size='17' style={{paddingLeft: 85}}/> <Text>1</Text> <Icon name='plus' type='feather' color='#00ace6' size='17' style={{paddingLeft: 15}}/>  </Text>
    </View>
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.boxshadow}>
    <View style={styles.container}>
    <TouchableOpacity style={styles.item}>
    <Image source={air2} style={styles.imgStyle} />
    </TouchableOpacity>
    <View style={styles.container1}>
    <Text style={{paddingTop:0, paddingLeft:15, paddingBottom:7, fontSize:18,}}>Nike Houraches  <Icon name='trash-2' type='feather' color='#00ace6' size='17' style={{paddingLeft: 90, paddingTop:17}}/></Text>
    <Text style={{ paddingLeft:15, paddingBottom:8, color:'grey'}}>Mountain Bike </Text>
    <Text style={{ paddingLeft:10,fontSize:20, fontWeight:'bold'}}> <Text style={{color:'#00ace6'}}>¢</Text> 700.00   <Icon name='minus' type='feather' color='black' size='17' style={{paddingLeft: 80}}/> <Text>1</Text> <Icon name='plus' type='feather' color='#00ace6' size='17' style={{paddingLeft: 10}}/>  </Text>
    </View>
    </View>
    </TouchableOpacity>

    
            <TouchableOpacity style={styles.button2}  >
            <View style={styles.categories}>
            <TextInput placeholder='Enter Voucher Code' keyboardType='numeric' 
            value={input}
            onChangeText={(text)=> setInput(text)}
            onSubmitEditing={() => {
                
                setInput('');
            }} 
            style={{marginLeft:10,width:'60%'}}/>
            <TouchableOpacity onPress={() => {setInput(''); }} 
            style={{ width:'30%',height:45, borderRadius:20, marginLeft:15, backgroundColor: '#00ace6'}}>
              <Text style={{fontSize:17, color:'white', textAlign:'center', fontWeight:'bold', paddingTop:10}}> Apply </Text>
            </TouchableOpacity>
            </View>
            </TouchableOpacity>
    
 
    

    <View style={styles.container}>
    <TouchableOpacity style={styles.item1}>
      <View style={styles.categories}>
      <Text style={{paddingTop:20, paddingLeft:25,  paddingRight:95, paddingBottom:15, fontSize:18, color:'grey'}}>Subtotal  </Text>
      <Text style={{ paddingLeft:50,fontSize:20 ,paddingTop:20,}}> <Text style={{color:'#00ace6'}}>¢</Text> 2,100.00 </Text>
      </View>

      <View style={styles.categories}>
      <Text style={{ paddingLeft:25,  paddingRight:90, paddingBottom:15, fontSize:18, color:'grey'}}>Shipping  </Text>
      <Text style={{ paddingLeft:50,fontSize:20, }}> <Text style={{color:'#00ace6'}}>¢</Text> 20.00 </Text>
      </View>

    <Text >      ..................................................................................   </Text>
      
    <View style={styles.categories}>
      <Text style={{ paddingLeft:25, paddingTop:15,  paddingRight:90, paddingBottom:15, fontSize:22, fontWeight:'bold', color:'black'}}>Total</Text>
      <Text style={{ paddingLeft:80, paddingTop:15,  fontSize:20, fontWeight:'bold'}}> <Text style={{color:'#00ace6'}}>¢</Text> 2,120.00 </Text>
      </View>

    </TouchableOpacity>
    </View>

            <TouchableOpacity style={styles.button1} >
              
            <Text   onPress={() => navigation.push('Checkout')}
            style={{color:"white", fontSize:20, fontWeight: 'bold', }}>               Process to Checkout</Text> 
            </TouchableOpacity>
    

      
           
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}
  
const styles= StyleSheet.create({

  categories:{
    flexDirection:'row',
  },
  fontStyle:{
    fontSize:18, 
    color:"black", 
    marginTop:0, 
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
    borderRadius:25, 
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
  backgroundColor:"white", 
  textAlign: "center" ,
  width:"95%",
  marginTop:15,
  marginBottom:20,

  shadowColor: '#cccccc',
      shadowOpacity: 0.3,
      shadowRadius: 10,
      
      shadowOffset: {
          width: 0,            
          height: 5,           
      },
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
  borderRadius:25, 
  backgroundColor:"#00ace6", 
  alignSelf:"center", 
  textAlign: "center" ,
  width:"85%",
  marginTop:15,
  marginBottom:100,
  marginRight:18,
},

button2:{
  
  height:60,
  justifyContent:'center',
  borderRadius:17, 
  backgroundColor:"white", 
  alignSelf:"center", 
  textAlign: "center" ,
  width:"85%",
  marginTop:15,
  marginRight:18,

  shadowColor: '#cccccc',
      shadowOpacity: 0.3,
      shadowRadius: 10,
      
      shadowOffset: {
          width: 0,            
          height: 5,           
      },
},

});

  export default Cartlist;
  
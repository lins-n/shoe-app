import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import card3 from '../assets/card3.png';




function Checkout({navigation}) {

    const [input,setInput,] = React.useState("");
    
    return (

        <View style={styles.Checkout}>
            <ScrollView>
            <Text style={{textAlign:'center', paddingBottom:20,}}> Choose a card to complete your purchase </Text>
            <Image source={card3} style={styles.imgStylenew}  />
            
            <Text style={{ textAlign:'center', fontSize:20,}}> Enter Card Details </Text>
            
            <Text style={styles.cardStyle}> CARD NAME </Text>
            <TouchableOpacity style={styles.buttonCatnew} >
            <TextInput 
            style={{color:"black", fontSize:15,paddingLeft:10, }}
            value={input}
            onChangeText={(text)=> setInput(text)}
            onSubmitEditing={() => {
                alert("Your Card Name is: + {value} ");
                setInput('');
            }}
            />
            </TouchableOpacity>
            <Text style={styles.cardStyle}> CARD NUMBER </Text>
            <TouchableOpacity style={styles.buttonCatnew} >
            <TextInput keyboardType="default" style={{color:"black", fontSize:15,paddingLeft:10, }} />
            </TouchableOpacity>

            <View style={styles.categories}>
                <View>
                <Text style={styles.cardStyle}> EXPIRY DATE </Text>
                <TouchableOpacity style={styles.buttonCat} >
                <TextInput style={{color:"black", fontSize:15,paddingLeft:10, }}  onChangeText={(text)=> setInput(text)}/>
                </TouchableOpacity>
                </View>

                <View>
                <Text style={styles.cardStyle}> CVV </Text>
                <TouchableOpacity style={styles.buttonCat} >
                <TextInput codeLength={3} keyboardType='numeric' style={{color:"black", fontSize:15,paddingLeft:10, }}  onChangeText={(text)=> setInput(text)} />
                </TouchableOpacity>
                </View>
                        
            </View>

            <View style={styles.categories}>
                <View>
                <Text style={{fontSize:20,paddingTop:40,paddingLeft:30,}}> Payment Amount  </Text>
                </View>

                <View>
                <Text style={{fontSize:25,paddingTop:37,paddingLeft:30, fontWeight:'bold', color:'#00ace6',}}> ¢3,600.00 </Text>
                </View>
                        
            </View>

            <TouchableOpacity style={styles.button2}  >
            <Text 
            style={{color:"white", fontSize:20, fontWeight: 'bold', textAlign:'center',}}>Buy Now</Text> 
            </TouchableOpacity>

            </ScrollView>
        </View>
    );
}

const styles= StyleSheet.create({
    categories:{
        flexDirection:'row',
    },

    imgStylenew:{
        borderRadius:25, 
        marginLeft: 5,
        alignSelf:'center',
      },

        Checkout:{
            marginTop:70,
            backgroundColor:'#f2f2f2',
        },
        
        imgCont2:{
            width: 370, 
            height: 250, 
            borderRadius:25, 
            marginRight:5, 
            marginLeft:20,
            backgroundColor:"white",
            alignItems:'center',
          
          },
          cardStyle:{
        textAlign:'left', 
          paddingBottom:10,
          paddingTop:40,
          marginLeft:35,
          fontSize:15,
          color:'#8c8c8c',
        },

        buttonCatnew:{
            width:350,
            height:55,
            justifyContent:'center',
            borderRadius:15, 
            backgroundColor:"#ededed",
            textAlign: "center" ,
            marginRight:10,
            marginLeft:30,
            marginTop:0,
          },
          buttonCat:{
            width:160,
            height:55,
            justifyContent:'center',
            borderRadius:15, 
            backgroundColor:"#ededed",
            textAlign: "center" ,
            marginLeft:30,
            marginTop:0,
          },
          button2:{
  
            height:60,
            justifyContent:'center',
            borderRadius:15, 
            backgroundColor:"#00ace6", 
            alignSelf:"center", 
            textAlign: "center" ,
            width:"85%",
            marginTop:20,
            marginRight:0,
            marginBottom:280,
          },

});

export default Checkout;
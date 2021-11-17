import React , { useState } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Alert, StyleSheet, Text, View , TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';



const showAlert = ({navigation}) =>
  Alert.alert(
    "Purchase Succesful",
    "Congratulations!! You have successfully purchased your items.",
    [
      {
        text: "Done",
        
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

function Checkout({navigation}) {

    const [input,setInput,] = React.useState("");
    
    
    return (
      <SafeAreaView>
        <View style={styles.Checkout}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{textAlign:'center', paddingBottom:5,}}> Choose a card to complete your purchase </Text>
            <Text style={{textAlign:'center',}}> Swipe to select a Card</Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
            <Image source={card3} style={styles.imgStylenew}  />
            <View style={{flexDirection:'row', justifyContent:'center',}}>
            <BouncyCheckbox fillColor="red" checked={false} style={{justifyContent:'center',}}/>
            <Text style={{paddingTop:3,fontSize:15}}> Select Credit Card</Text>
            </View>
            </View>

            <View>
            <Image source={card4} style={styles.imgStylenew}  />
            <View style={{flexDirection:'row', justifyContent:'center',}}>
            <BouncyCheckbox fillColor="blue" checked={false} style={{justifyContent:'center',}}/>
            <Text style={{paddingTop:3,fontSize:15}}> Select Credit Card</Text>
            </View>
            </View>
            </ScrollView>
            
            
            <Text style={{ textAlign:'center', fontSize:20, paddingTop:20,}}> Enter Card Details </Text>
            
            <Text style={styles.cardStyle}> CARD NAME </Text>
            <TouchableOpacity style={styles.buttonCatnew}  >
            <TextInput 
            style={{color:"black", fontSize:15,paddingLeft:10, }}
            value={input}
            onChangeText={(text)=> setInput(text)}
            onSubmitEditing={() => {
                
                setInput('');
            }}
            placeholder=' Enter Card Name '
            />
            </TouchableOpacity>
            <Text style={styles.cardStyle}> CARD NUMBER </Text>
            <TouchableOpacity style={styles.buttonCatnew} >
            <TextInput keyboardType="default" style={{color:"black", fontSize:15, paddingLeft:10, }} placeholder=' Enter Card Number ' />
            </TouchableOpacity>

            <View style={styles.categories}>
                <View>
                <Text style={styles.cardStyle}> EXPIRY DATE </Text>
                <TouchableOpacity style={styles.buttonCat} >
                <TextInput style={{color:"black", fontSize:15, paddingLeft:10, }} placeholder=' Enter Date '  />
                </TouchableOpacity>
                </View>

                <View>
                <Text style={styles.cardStyle}> CVV </Text>
                <TouchableOpacity style={styles.buttonCat} >
                <TextInput codeLength={3} keyboardType='numeric' style={{color:"black", fontSize:15, paddingLeft:10, }} placeholder=' Enter CVV '  />
                </TouchableOpacity>
                </View>
                        
            </View>

            <View style={styles.categories}>
                <View>
                <Text style={{fontSize:20, paddingTop:40,paddingLeft:30,}}> Payment Amount  </Text>
                </View>

                <View>
                <Text style={{fontSize:25, paddingTop:37,paddingLeft:30, fontWeight:'bold', color:'#00ace6',}}> ¢3,600.00 </Text>
                </View>
                        
            </View>

            <TouchableOpacity style={styles.button2} onPress={showAlert} >
            <Text 
            style={{color:"white", fontSize:20, fontWeight: 'bold', textAlign:'center',}}  >Buy Now</Text> 
            </TouchableOpacity>

            <Text style={{fontSize:15, paddingBottom: 30, textAlign:'center', color:'#8c8c8c'}} onPress={() => navigation.push('Drawer')}  > Return to Main menu </Text> 

            </ScrollView>
        </View>
        </SafeAreaView>
    );
}

const styles= StyleSheet.create({
    categories:{
        flexDirection:'row',
    },

    imgStylenew:{
        borderRadius:25, 
        width:415,
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
            borderRadius:25, 
            backgroundColor:"#00ace6", 
            alignSelf:"center", 
            textAlign: "center" ,
            width:"85%",
            marginTop:20,
            marginRight:0,
            marginBottom:20,
          },

});

export default Checkout;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import air from '../assets/air.png';
import air2 from '../assets/air2.png';
import air3 from '../assets/air3.png';
import air4 from '../assets/air4.png';
import air5 from '../assets/air5.png';
import air6 from '../assets/air6.jpg';


function Categories({navigation}) {
  
  return (
   
  

  <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} >
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'center' ,paddingLeft:20, backgroundColor:'white',paddingTop:0}}>
  
      <View style={styles.categories}>
      <Text style={styles.mainStyle1}> Shoes </Text>
      <Text style={{fontSize:15, paddingTop:33,  paddingLeft:230, color:"#b3b3b3"}}> Sort by </Text>
      </View>


      <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true} >
      {/* <View style={styles.categories}> */}
      <TouchableOpacity style={styles.buttonCat} >
          <Text 
          style={{color:"#00ace6", fontSize:20,fontWeight: 'bold',  }}>    All    </Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCat} >
          <Text 
          style={{color:"#666666", fontSize:20, }}>    Nike    </Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCat} >
          <Text 
          style={{color:"#666666", fontSize:20,}}>    Adidas    </Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCat} >
          <Text 
          style={{color:"#666666", fontSize:20, }}>    Puma    </Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCat} >
          <Text 
          style={{color:"#666666", fontSize:20, }}>    Churchshoe    </Text> 
          </TouchableOpacity>
      {/* </View> */}
      </ScrollView>

      
     
     
      
      <View style={styles.imgStyle1}>
        <TouchableOpacity 
        style={styles.imgCont1} onPress={() => navigation.push('Shoedetail')} >
        <View>
        <ImageBackground source={air2} style={styles.imgStyle} >
        
        </ImageBackground> 
        </View>
        <Text style={styles.textStyle1}>Nike Hourache Purple</Text>
        <Text style={styles.textStyle2}>¢600.00</Text>
       </TouchableOpacity>

       <TouchableOpacity 
       style={styles.imgCont1} onPress={() => navigation.push('Shoedetail')} >
       <Image source={air3} style={styles.imgStyle} />
       <Text style={styles.textStyle1}>Nike Air Max</Text>
       <Text style={styles.textStyle2}>¢1000.00</Text> 
       </TouchableOpacity>
       </View>
       
       <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
      
      <TouchableOpacity style={styles.imgCont2} onPress={() => navigation.push('Shoedetail')} >
       <Image source={air5} style={styles.imgStylenew} /> 
       <Text style={styles.textStyle1}>Nike Hourache</Text>
       <Text style={styles.textStyle2}>¢700.00</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.imgCont2} onPress={() => navigation.push('Shoedetail')} >
       <Image source={air} style={styles.imgStylenew}  /> 
       <Text style={styles.textStyle1}>Nike Hourache</Text>
       <Text style={styles.textStyle2}>¢700.00</Text>
       </TouchableOpacity>

      </ScrollView>

    

       <View style={styles.imgStyle1}>
       <TouchableOpacity style={styles.imgCont1} onPress={() => navigation.push('Shoedetail')} >
       <Image source={air4} style={styles.imgStyle} /> 
       <Text style={styles.textStyle1}>Nike Hourache</Text>
      <Text style={styles.textStyle2}>¢900.00</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.imgCont1} onPress={() => navigation.push('Shoedetail')} >
       <Image source={air2} style={styles.imgStyle} /> 
       <Text style={styles.textStyle1}>Nike Hourache</Text>
      <Text style={styles.textStyle2}>¢1700.00</Text>
       </TouchableOpacity>
       </View>


       <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true} >
      
      <TouchableOpacity style={styles.imgCont2} onPress={() => navigation.push('Shoedetail')} >
       <Image source={air6} style={styles.imgStylenew} /> 
       <Text style={styles.textStyle1}>Nike Air Max</Text>
       <Text style={styles.textStyle2}>¢500.00</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.imgCont2} onPress={() => navigation.push('Shoedetail')} >
       <Image source={air} style={styles.imgStylenew} /> 
       <Text style={styles.textStyle1}>Nike Hourache</Text>
       <Text style={styles.textStyle2}>¢500.00</Text>
       </TouchableOpacity>

      </ScrollView>

   
      
       
          
       

       
       

          

      
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.push('DetailsScreen')}
        /> */}
        {/* <Button
        title="Register"
        onPress={() => navigation.push('HomeScreen')}
        /> */}
    </View>
    </ScrollView>

    
    
  );
}

const styles=StyleSheet.create({
  categories:{
    flexDirection:'row',
    paddingBottom:5,
  },

  categories2:{
    flexDirection:'row',
    paddingBottom:15,
    shadowColor: '#cccccc',
      shadowOpacity: 0.3,
      shadowRadius: 10,
      
      shadowOffset: {
          width: 0,            
          height: 5,           
      },
  },


  mainStyle1:{
    marginTop:"5%" , 
    textAlign:"left",
    fontSize: 30, 
    fontWeight: 'bold', 
    color:"#262626",
    
    },

     textStyle2:{
    fontSize:19,
    fontWeight:'bold',
    textAlign:'center',
    color:"#00ace6",
  },


    buttonCat:{
  
      height:40,
      justifyContent:'center',
      borderRadius:15, 
      backgroundColor:"white",  
      textAlign: "left" ,
      marginBottom:20,
      marginRight:10,
      shadowColor: '#cccccc',
      shadowOpacity: 0.3,
      shadowRadius: 10,
      
      shadowOffset: {
          width: 0,            
          height: 5,           
      },
      
    },

    buttonCatnew:{
      width:250,
      height:40,
      justifyContent:'center',
      borderRadius:15, 
      backgroundColor:"#fafafa",
      textAlign: "center" ,
      marginRight:10,
      marginLeft:60,
      marginTop:0,
      
    },


    imageLarge:{
  
      height:200,
      justifyContent:'center',
      borderRadius:15, 
      backgroundColor:"#f2f2f2",  
      textAlign: "left" ,
      marginBottom:20,
      marginRight:10,
      
    },


    imgStyle:{
      width: 150, 
      height: 200, 
      borderRadius:25, 
      
      marginLeft: 18,
  
    
    },
    imgStylenew:{
      width: 340, 
      height: 200, 
      borderRadius:25, 
      
      marginLeft: 15,
  
    
    },
    textStyle1:{
      fontSize:15,
      textAlign:'center',
      },
  
    imgCont1:{
      width: "90%", 
      height: 250, 
      borderRadius:25, 
      marginRight:15, 
      backgroundColor:"white",
      shadowColor: '#cccccc',
      shadowOpacity: 0.3,
      shadowRadius: 10,
      
      shadowOffset: {
          width: 0,            
          height: 5,           
      },
    
    },

    imgCont2:{
      width: 370, 
      height: 250, 
      borderRadius:25, 
      marginRight:15, 
      marginBottom:15,
      backgroundColor:"white",
      shadowColor: '#cccccc',
      shadowOpacity: 0.3,
      shadowRadius: 10,
      
      shadowOffset: {
          width: 0,            
          height: 5,           
      },
    
    },

    button4:{
  
      height:60, 
      justifyContent:'center',
      borderRadius:15, 
      backgroundColor:"black", 
      textAlign: "center" ,
      width:"150%",
      marginTop:5,
      
      
      
    },
  imgStyle1:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'flex-start',
    width: 200, 
    height: 250, 
    borderRadius:25, 
    marginBottom: 20,
    paddingTop:5,
    
    
    
  },

});
  export default Categories;
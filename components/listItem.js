import React,{useEffect,useState} from 'react'
import { View, Text,StyleSheet,Dimensions,Image } from 'react-native'
import axios from "axios"
const listItem = (props) => {
    console.log(props.item)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.headerPic}>
                <Image source={require("../assets/profile.png")} style={{width:"80%",height:"80%"}}/>
              </View>
              <View style={styles.headerTitle}>
                <Text style={{fontSize:18,fontWeight:"700"}}>{props.item.name}</Text>
                <Text style={{fontSize:15,color:"#2092EC"}}>{props.item.company.catchPhrase}</Text>
              </View>
            </View>
            <View style={styles.img}>
              <Image style={{width:"100%",height:"100%"}} source={{uri:`https://source.unsplash.com/random/${props.item.id}`}} />
            </View>
            <View style={styles.footer}>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  container:{
     height:Dimensions.get("window").width*0.9,
     width:"100%",
     backgroundColor:"#fff",
     marginVertical:5
  },
  header:{
    flex:0.23,
    flexDirection:"row"
    
  },
  headerPic:{
    flex:0.2,
    justifyContent:"center",
    alignItems:"center",
    
   
  },
  headerTitle:{
    flex:0.8,
    paddingHorizontal:10,
    paddingTop:5
  },
  img:{
    flex:0.7,

  },
  footer:{
    flex:0.15,

  }
})

export default listItem

import React,{useEffect} from 'react'
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; 
import {useSelector,useDispatch} from "react-redux"
const homeScreen = (props) => {
    const isLogged = useSelector(state=>state.authCheck.isLogged)
    
    //check for authntication
    useEffect(()=>{

        setTimeout(()=>{
            if(isLogged){
                props.navigation.navigate("List")
            }else{
                props.navigation.navigate("Login")
            }
        },100)
       
    },[])
   

        const logoHandler = ()=> {
            if(isLogged){
                props.navigation.navigate("List")
            }else{
                props.navigation.navigate("Login")
            }
        }

    return(
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#c1dfc4','#deecdd']} style={styles.container}>
            
                <TouchableOpacity style={styles.imgCont} onPress={logoHandler}>
                <Image source={require("../assets/logo.png")} style={styles.img}/>
                </TouchableOpacity>
            

        </LinearGradient>
    )
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
    justifyContent:"center"
    },
    imgCont:{
        width:"100%",
        height:"50%",
        justifyContent:"center",
        alignItems:"center"
    },
    img:{
        width:"55%",
        height:"55%"
    }
})
export default homeScreen
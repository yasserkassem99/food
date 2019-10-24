import React,{useState} from 'react'
import {View,StyleSheet,ImageBackground,Dimensions,StatusBar,TextInput,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from "react-native"
import { Button ,Text} from 'native-base';
import {useDispatch} from "react-redux";
import {authStart} from "../store/action/authStart"

const loginScreen = (props) => {
    const dispatch = useDispatch()

    const [borderColor,setBordercolor]=useState("#fff")
    const [phoneNumber,setPhoneNumber] = useState("+962")

    const login = ()=>{
         dispatch(authStart(phoneNumber))
    }
    return(
        <>
       <StatusBar hidden={true} barStyle="light-content"  />
        <KeyboardAvoidingView style={styles.container} >
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={require("../assets/login.jpg")} style={{flex:1,width:"100%"}} imageStyle={{opacity:0.8,backgroundColor:"black",position:"absolute",top:0}} >
        
        <View style={styles.formCont}>
            <TextInput 
            onFocus={()=>setBordercolor("#48DFBE")}
            onBlur={()=>setBordercolor("#fff")}
            style={{...styles.formInpt,borderBottomColor:borderColor}}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={(num)=>setPhoneNumber(num)}
            keyboardType="phone-pad"/>
            <View style={{flex:1,marginTop:10,width:"100%"}}>
            <Button onPress={()=>login()} block light>
                <Text>log in</Text>
            </Button>
            </View>
        </View>
      </ImageBackground>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </>
    )
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-end",
        
    },
    formCont:{
        flex:0.3,
        width:"85%",
        alignItems:"center",
    },
    formInpt:{
        width:"100%",
        paddingHorizontal:10,
        borderBottomWidth:2,
        backgroundColor:"#fff",
            }
})

export default loginScreen
import React,{useState} from 'react'
import {View,StyleSheet,ImageBackground,
        Dimensions,Image,
        TextInput,KeyboardAvoidingView,
        TouchableWithoutFeedback,Keyboard} from "react-native"
import { Button ,Text} from 'native-base';
import {useDispatch} from "react-redux";
import {authStart} from "../store/action/authStart"

// constants
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height


const loginScreen = (props) => {
    const dispatch = useDispatch()

    const [borderColor,setBordercolor]=useState("transparent")
    const [phoneNumber,setPhoneNumber] = useState("+962")

    const login = ()=>{
         dispatch(authStart(phoneNumber))
    }
    return(
        
        <KeyboardAvoidingView style={styles.container} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={require("../assets/login.jpg")}
       style={{flex:1,width:"100%",justifyContent:"flex-end",alignItems:"center"}}
        imageStyle={{opacity:0.8,backgroundColor:"black"}} >
        <View style={{flex:0.7,justifyContent:"center",alignItems:"center",width:"100%"}}>
            <View style={styles.textBox}>
            <Image source={require("../assets/logo.png")} style={styles.img}/>
            <Text style={{fontSize:27,fontWeight:"700"}}>You Are Welcome</Text>
            </View>
        </View>
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
            <Button style={{borderRadius:3}} onPress={()=>login()} block light>
                <Text>log in</Text>
            </Button>
            </View>
        </View>
      </ImageBackground>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      
    )
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    textBox:{
        flex:0.6,
        backgroundColor:"#eee",
        width:"80%",
        borderRadius:10,
        elevation:7,
        opacity:0.85,
        alignItems:"center",
        justifyContent:"center"
    },
    img:{
        height:80,
        width:80,
    },
    formCont:{
        flex:0.3,
        width:"80%",
        alignItems:"center",
    },
    formInpt:{
        width:"100%",
        paddingHorizontal:10,
        borderBottomWidth:2,
        backgroundColor:"#fff",
        borderRadius:3
            }
})

export default loginScreen
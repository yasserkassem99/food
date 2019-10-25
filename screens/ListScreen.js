import React,{useEffect,useState} from 'react'
import { View, Text,StyleSheet,ScrollView,FlatList,ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import axios from "axios"
import Item from "../components/listItem"
const ListScreen = () => {
    //state
    const [isLoading,setIsLoading]= useState(false)
    const [data,setData] = useState([])

    //logic

    useEffect(()=>{
        setIsLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            setData(res.data)
            setIsLoading(false)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    let list = (
        
    <FlatList
    data={data}
    renderItem={(item)=><Item item={item.item}/>}
    keyExtractor={item=>item.id+""}
    style={{width:"100%"}}/>)

    if(isLoading){
        list=( <View style={{flex:1,alignItems:"center"}}>
                <ActivityIndicator color="#fff" size="large"/>
               </View>)
    }

    return (
        
            <LinearGradient  colors={["#3F8A5A",'#65A55F',"#42703E"]} style={styles.container}>
                {list}
            </LinearGradient>
        
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        paddingTop:50,
        alignItems:"center"
    },
   
})


export default ListScreen

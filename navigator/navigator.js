import {createStackNavigator} from "react-navigation-stack"
import LoginScreen from "../screens/LoginScreen"
import HomeScreen from "../screens/homeScreen"
import ListScreen from "../screens/ListScreen"

const authStack = createStackNavigator ({
    Home:{
    screen:HomeScreen,
    navigationOptions:{
        header:null
    }
    },
    Login:{
        screen:LoginScreen,
        navigationOptions:{
            header:null
        }
        },
    List:{
        screen:ListScreen
    }
},{
    defaultNavigationOptions:(options)=>{
        const {routeName} = options.navigation.state
       
        if(routeName ==="List"){
            return {
            headerStyle:{backgroundColor:"#7DA48B"},
            headerTintColor:"#003613"
            }
        }
    },
});


export default authStack
import {createStackNavigator} from "react-navigation-stack"
import LoginScreen from "../screens/LoginScreen"
import HomeScreen from "../screens/homeScreen"


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
        }
});


export default authStack
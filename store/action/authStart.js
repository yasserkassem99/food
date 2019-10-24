import auth from '@react-native-firebase/auth';
import * as actionTypes from "./actinTypes"


export const authStart = (phone)=>dispatch=>{

    auth().signInWithPhoneNumber('+962776068757')
    .then(res=>{
        dispatch({
            type:actionTypes.LOGGED,
            id:res._verificationId
        })
    })
    .catch(err=>{
        dispatch({
            type:actionTypes.FAILD,
        })
    });
}
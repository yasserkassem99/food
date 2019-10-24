import {createStore,combineReducers,applyMiddleware} from "redux";
import authCheck from "./reducer/authReducer";
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from "redux-thunk"
import test from "./reducer/testReducer"




const rootReducer = combineReducers({
    authCheck,
    test
})


const persistConfig = {
  key: 'root',
  storage:AsyncStorage,

  // Whitelist (Save Specific Reducers)
  whitelist: [
  'authCheck',
  ],
// Blacklist (Don't Save Specific Reducers)
  blacklist: [

  ]
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer,applyMiddleware(thunk))
let persistor = persistStore(store)
export { store, persistor }

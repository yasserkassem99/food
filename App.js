import stack from "./navigator/navigator"
import {createAppContainer} from "react-navigation"
import {Provider} from "react-redux"
import { store, persistor } from "./store/index.js"
import React from 'react'
import { PersistGate } from 'redux-persist/integration/react';
const MainApp = createAppContainer(stack);

const app = () => (
<Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
    <MainApp/>
    </PersistGate>
    </Provider>)

export default app;

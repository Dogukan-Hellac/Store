import React, { useState, useEffect } from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthLoading, setIsAuthLoading] = useState(true)

    useEffect(() => {
        AsyncStorage.getItem('@USER').then(userSession => {
            if (userSession) {
                setUser(JSON.parse(userSession));
            }
            setIsAuthLoading(false)
        })
    }, [])

    const store = createStore(reducers, { user, isAuthLoading })
    return <Provider store={store}>{children}</Provider>
}

export default AuthProvider
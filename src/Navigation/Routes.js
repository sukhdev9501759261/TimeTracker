// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { Linking, Platform, ActivityIndicator, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../config/themeContext';
import theme from '../config/theme';


const PERSISTENCE_KEY = 'NAVIGATION_STATE';
export default function Routes() {
    const [isReady, setIsReady] = useState(false);
    const [initialState, setInitialState] = useState();
    const [mode, setMode] = useState(false);
    // check userdata from redux for session
    const userData = useSelector(state => state.auth)

    useEffect(() => {
        let eventListener = EventRegister.addEventListener(
            "changeTheme",
            (data) => {
                setMode(data);
            }
        );
        return () => {
            EventRegister.removeEventListener(eventListener)
        };
    });

    useEffect(() => {
        const restoreState = async () => {
            try {
                const initialUrl = await Linking.getInitialURL();
                if (Platform.OS !== 'web' && initialUrl == null) {
                    const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
                    const state = savedStateString
                        ? JSON.parse(savedStateString)
                        : undefined;
                    if (state !== undefined) {
                        setInitialState(state);
                    }
                }
            } finally {
                setIsReady(true);
            }
        };
        if (!isReady) {
            restoreState();
        }
    }, [isReady]);
    if (!isReady) {
        return <ActivityIndicator />;
    }

    return (
        <>
        <SafeAreaView style={{flex:1}}>
            <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
                <NavigationContainer
                    initialState={initialState}
                    onStateChange={(state) =>
                        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
                    }>
                    {/* make dynamic when user available and use homestack for tabs if needed currently 
                    we only use authstack */}
                    {false ? HomeStack() : AuthStack()}
                </NavigationContainer>
            </themeContext.Provider>
            </SafeAreaView>
        </>

    );
}


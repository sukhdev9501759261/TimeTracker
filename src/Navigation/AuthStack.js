import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import {
    TimeTracker,
} from '../Screens';
import { PracticeProvider } from '../Global/PracticeContext';


const Stack = createNativeStackNavigator();
export default function AuthStack() {
    return (
        <PracticeProvider>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={navigationStrings.TimeTracker} component={TimeTracker} />
            </Stack.Navigator>
        </PracticeProvider>
    )
}
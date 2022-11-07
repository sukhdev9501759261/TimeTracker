import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TabRoutes';
import * as Screens from '../Screens'

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes} />
            <Stack.Screen name={navigationStrings.USERS} component={Screens.Users} />
            <Stack.Screen name={navigationStrings.MESSAGE} component={Screens.Message} />
        </Stack.Navigator>

    )
}
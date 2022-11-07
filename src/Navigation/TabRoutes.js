import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Image } from 'react-native';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import { Status, Calls, Camera, Chats, Settings } from '../Screens';


const BottomTab = createBottomTabNavigator();

export default function TabRoutes() {

    return (

        <BottomTab.Navigator
            initialRouteName={navigationStrings.CHATS}
            screenOptions={{
                headerShown: false,
                tabBarInactiveTintColor: 'black',
                tabBarActiveTintColor: 'red',
                //tabBarShowLabel:false
            }}

        >
            <BottomTab.Screen
                name={navigationStrings.STATUS} component={Status}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? "blue" : "black" }} source={imagePath.icForward} />
                        )
                    }
                }}

            />
            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? "blue" : "black" }} source={imagePath.icCalls} />
                        )
                    }
                }}
                name={navigationStrings.CALLS} component={Calls}
            />
            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? "blue" : "black" }} source={imagePath.icCamera} />
                        )
                    }
                }}
                name={navigationStrings.CAMERA} component={Camera}
            />
            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? "blue" : "black" }} source={imagePath.icChat} />
                        )
                    }
                }}

                name={navigationStrings.CHATS} component={Chats}
            />
            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? "blue" : "black" }} source={imagePath.icSetting} />
                        )
                    }
                }}
                name={navigationStrings.SETTINGS} component={Settings}
            />
        </BottomTab.Navigator>

    );
}
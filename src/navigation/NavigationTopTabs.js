import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ticket from '../screens/Ticket';
import Chats from '../screens/Chats';
import World from '../screens/World';
import profile from '../screens/Profile';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



const Tab = createMaterialTopTabNavigator();

export function NavigationTopTabs() {

    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator tabBarOptions={{
            labelStyle: { fontSize: 16, fontWeight: "bold" },
            style: {
                backgroundColor: '#3D3C5D',
                marginTop: insets.top,
                shadowColor: '#FF0000',
                shadowRadius: 10,
                shadowOpacity: 8,
                elevation: 8,
                shadowOffset: {
                    width: 0,
                    height: 4,
                }

            },
            activeTintColor: '#fff',
            indicatorStyle: {
                backgroundColor: '#9547F1',

            },
            pressColor: '#9547F1'
        }}>
            <Tab.Screen name="Chats" component={Chats} />
            <Tab.Screen name="Ticket" component={Ticket} />
        </Tab.Navigator>
    )
}

export function NavigationTopTabsWorld() {
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator tabBarOptions={{
            labelStyle: { fontSize: 16, fontWeight: "bold" },
            style: {
                backgroundColor: '#3D3C5D',
                marginTop: insets.top,
                shadowColor: '#FF0000',
                shadowRadius: 10,
                shadowOpacity: 8,
                elevation: 8,
                shadowOffset: {
                    width: 0,
                    height: 4,
                }

            },
            activeTintColor: '#fff',
            indicatorStyle: {
                backgroundColor: '#9547F1',

            },
            pressColor: '#9547F1'
        }}>
            <Tab.Screen name="Actividades" component={World} />
            <Tab.Screen name="Recomendados" component={profile} />
        </Tab.Navigator>
    )

}

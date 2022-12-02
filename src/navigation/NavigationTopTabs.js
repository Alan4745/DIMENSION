import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ticket from '../screens/Ticket';
import Chats from '../screens/Chats';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



const Tab = createMaterialTopTabNavigator();

export default function NavigationTopTabs() {

    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator tabBarOptions={{
            labelStyle: { fontSize: 16 },
            style: { backgroundColor: '#000000', marginTop: insets.top, marginRight: 10 },
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
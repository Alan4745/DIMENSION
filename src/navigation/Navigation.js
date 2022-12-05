import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/Home';
import World from '../screens/World';
import Ticket from '../screens/Ticket';
import Profile from '../screens/Profile';
import LoginScreen from '../screens/Login';
import { NavigationTopTabs, NavigationTopTabsWorld } from './NavigationTopTabs';

const Tab = createBottomTabNavigator();

const logenin = false;

export default function Navigation() {
    return (


        <Tab.Navigator initialRouteName="World" tabBarOptions={{
            style: {
                backgroundColor: '#7000FF',
                position: "absolute",
                height: 60,
                bottom: 16,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 10,
                marginTop: 20,
                borderTopWidth: 0,
                shadowColor: '#7000FF',
                shadowRadius: 10,
                shadowOpacity: 8,
                elevation: 8,
                shadowOffset: {
                    width: 0,
                    height: 4,
                }

            },
            activeTintColor: '#00FFFF',
            inactiveTintColor: '#fff',

            labelStyle: {
                color: '#fff',
                top: -8
            },
        }}  >
            <Tab.Screen name="Chats" component={NavigationTopTabs} options={{
                tabBarLabel: "Chat",
                tabBarBadge: 3,
                tabBarIcon: ({ color, size }) => (
                    <Animatable.View animation={"flash"} duration={2000}>
                        <Icon name='comments' color={color} size={size} />
                    </Animatable.View>

                ),
            }} />
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Icon name='home' color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="World" component={NavigationTopTabsWorld}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => renderRoket(color, size),
                }} />

            <Tab.Screen name="Ticket" component={Ticket} options={{
                tabBarLabel: "Ticket",
                tabBarIcon: ({ color, size }) => (
                    <Icon name='ticket-alt' color={color} size={size} />
                ),
            }} />

            {logenin ?
                <Tab.Screen name="Profile" component={Profile} options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='user-circle' color={color} size={size} />
                    ),
                }} />
                :
                <Tab.Screen name="Login" component={LoginScreen} options={{
                    tabBarLabel: "Login",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='paper-plane' color={color} size={size} />
                    ),
                }} />}

        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    prueba: {
        backgroundColor: '#FF1D1D',
    }
});

function renderRoket(color, size) {
    return (
        <View>
            <View style={{ width: 100, top: 1, height: 49, backgroundColor: '#fff', justifyContent: 'center', borderBottomRightRadius: 50, borderBottomLeftRadius: 50 }}   >
                <View style={{ width: 60, height: 60, backgroundColor: '#0E1121', top: -20, justifyContent: 'center', alignSelf: 'center', borderRadius: 100 }}>
                    <Animatable.View animation="zoomIn" duration={2000}>
                        <Icon name='rocket' style={{ alignSelf: 'center', fontSize: size, color: color }} />
                    </Animatable.View>
                </View>
            </View>
        </View>
    )
}
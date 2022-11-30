import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Chats from '../screens/Chats'
import Home from '../screens/Home';
import World from '../screens/World';
import Ticket from '../screens/Ticket';
import Profile from '../screens/Profile';
import LoginScreen from '../screens/Login';
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

const logenin = false;

export default function Navigation() {
    return (
        <Tab.Navigator initialRouteName="World" tabBarOptions={{
            style: {
                backgroundColor: '#9547F1',
                position: "absolute",
                height: 60,
            },
            activeTintColor: '#00FFFF',
            inactiveTintColor: '#fff',
            labelStyle: {
                color: '#fff',
                top: -8
            }
        }}>
            <Tab.Screen name="Chats" component={Chats} options={{
                tabBarLabel: "Chat",
                tabBarBadge: 3,
                tabBarIcon: ({ color, size }) => (
                    <Icon name='comments' color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Icon name='home' color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="World" component={World}
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
            <View style={{ width: 70, height: 70, backgroundColor: '#9547F1', justifyContent: 'center', top: -15, borderRadius: 40 }}   >
                <View style={{ width: 60, height: 60, backgroundColor: '#0E1121', justifyContent: 'center', alignSelf: 'center', borderRadius: 40 }}>
                    <Animatable.View animation="zoomIn" duration={2000}>
                        <Icon name='rocket' style={{ alignSelf: 'center', fontSize: size, color: color }} />
                    </Animatable.View>
                </View>
            </View>
        </View>
    )
}
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

const DarkDia = '#000000';


export default function LoginScreen() {




    const onPressLearnMore = () => {
        console.log('dia')

    }

    return (
        <SafeAreaView style={prueba.droidSafeArea} >
            <View style={styles.container}>
                <Image source={require('../assets/logo-login.png')} style={{ width: 310, height: 60, marginBottom: 10, justifyContent: 'center', alignSelf: 'center' }} />
                <View style={styles.containerUserName}>
                    <Icon name='comments' style={styles.icon} />
                    <TextInput placeholder="Username" placeholderTextColor="gray"
                        style={styles.textInput} />
                </View>
                <View style={styles.containerPassword}>
                    <Icon name='comments' style={styles.icon} />
                    <TextInput placeholder="Password" placeholderTextColor="gray"
                        style={styles.textInput} secureTextEntry={true} />
                </View>
                <View style={styles.containerSignIn}>
                    <Button title='SIGN IN' backgroundColor='#ffa100' />
                </View>
                <View style={styles.containerRegister}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Create and Account?
                        <Text onPress={() => this.props.navigation.navigate('Register')}
                            style={{ color: 'red', fontWeight: 'bold' }}>  Register</Text>
                    </Text>
                </View>
                <View style={styles.box}>
                </View>
            </View>
        </SafeAreaView>
    );
}




const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    containerSignIn: {
        height: 60,
        marginLeft: '6%',
        marginRight: '6%',
        paddingTop: '2%'
    },
    containerUserName: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius: 20,
        marginBottom: 10,
    },
    containerPassword: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius: 20,
    },
    containerRegister: {
        height: 60,
        marginLeft: '6%',
        marginRight: '6%',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 1,
        backgroundColor: 'transparent',
        flex: 5,
        color: 'black',
        paddingLeft: '25%',
        elevation: 1,

        borderRadius: 5,
        elevation: 2,
        opacity: 1,
    },
    icon: {
        fontSize: 30,
        color: 'green',
        margin: 10,
    },
    box: {
        height: 50,
        width: '100%',
        margin: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    }
});

const prueba = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 0 : 0
    },
});



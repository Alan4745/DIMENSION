import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable'

const DarkDia = '#000000';


export default function LoginScreen() {
    const [text, onChangeText] = useState("Useless Text");
    const [number, onChangeNumber] = useState(null);

    return (
        <SafeAreaView style={styles.droidSafeArea}>
            <Animatable.View animation={"fadeIn"} style={styles.container}>
                <View style={styles.bg}>

                    <Image style={styles.img} source={require('../assets/logo-login.png')} />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />
                    <Text style={styles.text}>
                        Hola
                    </Text>

                </View>
            </Animatable.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 0 : 0
    },
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    bg: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: '#fff'
    },
    input: {
        height: 40,
        margin: 12,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        padding: 10,
        color: '#000',
        backgroundColor: '#fff',
        textAlign: 'center'
    },
    img: {
        alignSelf: 'center',
        width: 330,
        height: 75,
        padding: 10,
        position: 'relative',
        top: 1,
    }
});





import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react'

export default function World() {
    return (
        <SafeAreaView style={prueba.droidSafeArea}>
            <View style={styles.container}>
                <Text>World</Text>
            </View>
        </SafeAreaView>
    )
}

const prueba = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 0 : 0
    },
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
    },
});

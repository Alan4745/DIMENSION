import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal, Button } from "react-native";



export default function HomeChat() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.conversation}
            // onPress={() => navigation.navigate('MessagesScreen', {
            // 	username: username,
            // 	bio: bio,
            // 	picture: picture,
            // 	isBlocked: isBlocked,
            // 	isMuted: isMuted
            // })}
            >
                <TouchableOpacity
                    // onPress={() => setModalVisible(currentValue => !currentValue)}
                    style={[styles.imageContainer]}>
                    <Image style={styles.image} source={require('../../assets/foto_chat.png')} />
                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text numerOfLine={1} style={styles.username}>Alan</Text>
                        <Text style={styles.time}>12:10</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={styles.message}>Buenas</Text>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181828',
    },
    conversation: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: "center",
        flexDirection: 'row',
        height: 80,
        paddingLeft: 10,
        paddingRight: 10,
    },
    imageContainer: {
        marginRight: 15,
        borderRadius: 25,
        height: 50,
        width: 50,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    image: {
        height: 55,
        width: 55
    },
    username: {
        fontSize: 18,
        color: '#fff',
        width: 210
    },
    message: {
        fontSize: 15,
        width: 240,
        color: '#fff'
    },
    time: {
        fontSize: 13,
        color: '#fff',
        fontWeight: '300',
        marginRight: 10,
    },
    notificationCircle: {
        backgroundColor: '#003153',
        borderRadius: 50,
        height: 20,
        width: 20,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    notification: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 10
    }
})
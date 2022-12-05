import { View, Text, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from "react-native-safe-area-context";
import { Shadow } from 'react-native-shadow-2';
import React from 'react'

export default function World() {
    return (
        // <SafeAreaView style={prueba.droidSafeArea}>
        //                 <View style={{ backgroundColor: '#000000', width: '50%', height: '50%' }} />
        //     <ScrollView style={styles.container}>

        //         <View style={{ backgroundColor: '#000000', width: '50%', height: '50%' }} />
        //         <View style={styles.container}>
        //         <View style={styles.cards}>
        //             <View style={{ backgroundColor: '#FFFFFF', width: '100%', height: '70%', borderRadius: 25 }} >
        //                 <Image source={require('../assets/fortnite.png')} style={{ width: '100%', height: '100%', borderTopLeftRadius: 25, borderTopRightRadius: 25, resizeMode: 'cover' }} />
        //             </View>
        //             <View style={{ backgroundColor: '#FF7617', width: '100%', height: '30%', borderBottomLeftRadius: 25, borderBottomRightRadius: 25, flexDirection: 'row', alignItems: 'center', shadowColor: '#FF7617'}}>
        //                 <View style={{ backgroundColor: '#FF7617', width: '40%', height: '100%', borderBottomLeftRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
        //                     <Text>Hola</Text>
        //                 </View>
        //                 <View style={{ backgroundColor: '#FF7617', width: '60%', height: '100%', borderBottomRightRadius: 25 , justifyContent: 'center' }}>
        //                     <Button title="Learn More" color="#841584" accessibilityLabel="Learn more about this purple button"
        //                     />
        //                 </View>
        //             </View>
        //         </View>
        //         <View style={styles.cards}>
        //             <View style={{ backgroundColor: '#FFFFFF', width: '100%', height: '70%', borderRadius: 25 }} >
        //                 <Image source={require('../assets/fortnite.png')} style={{ width: '100%', height: '100%', borderTopLeftRadius: 25, borderTopRightRadius: 25, resizeMode: 'cover' }} />
        //             </View>
        //             <View style={{ backgroundColor: '#FF7617', width: '100%', height: '30%', borderBottomLeftRadius: 25, borderBottomRightRadius: 25, flexDirection: 'row', alignItems: 'center', shadowColor: '#FF7617'}}>
        //                 <View style={{ backgroundColor: '#FF7617', width: '40%', height: '100%', borderBottomLeftRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
        //                     <Text>Hola</Text>
        //                 </View>
        //                 <View style={{ backgroundColor: '#FF7617', width: '60%', height: '100%', borderBottomRightRadius: 25 , justifyContent: 'center' }}>
        //                     <Button title="Learn More" color="#841584" accessibilityLabel="Learn more about this purple button"
        //                     />
        //                 </View>
        //             </View>
        //         </View>
        //     </View>
        //     </ScrollView>
        // </SafeAreaView>


        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.cards}>
                    <View style={{ backgroundColor: '#000000', width: '100%', height: '70%', borderRadius: 25 }} >
                        <Image source={require('../assets/fortnite.png')} style={{ width: '100%', height: '100%', borderTopLeftRadius: 25, borderTopRightRadius: 25, resizeMode: 'cover' }} />
                    </View>
                    <Shadow distance={15} startColor={'#eb9066d8'} offset={[0, 0]} viewStyle={{ height: '50%' }} >

                        {/* <View style={{ backgroundColor: '#FF7617', height: 120, width: 380, borderBottomRightRadius: 25, borderBottomLeftRadius: 25 }}>
                            <Text >🤯</Text>
                        </View> */}

                        <View style={{
                            backgroundColor: '#E35B10', width: 380, height: 120, borderBottomLeftRadius: 25, borderBottomRightRadius: 25, flexDirection: 'row', alignItems: 'center'
                            , borderWidth: 0, borderColor: 'rgba(255,117,25,0.5)',
                        }}>
                            <View style={{ width: '50%', height: '100%', borderBottomLeftRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                                <View style={styles.bannerView}>
                                    <Text style={styles.text}>  <Icon name='eye' size={16} />  146K Espectadores</Text>
                                    <View style={{ flexDirection: 'row' , bottom: -30 }}>
                                        <Text style={styles.text}> 1200 <Icon name='thumbs-up' color={'white'} size={15} /> </Text>
                                        <Icon name='thumbs-down' color={'white'} size={15} />
                                        <Icon name='link' color={'white'} size={15} />
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: '50%', height: '100%', borderBottomRightRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.bannerButton}>

                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.text}> <Icon name='arrow-left' /> Ir A Actividad</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    </Shadow>

                    {/* <View style={{
                        backgroundColor: '#FF7519', width: '100%', height: '30%', borderBottomLeftRadius: 25, borderBottomRightRadius: 25, flexDirection: 'row', alignItems: 'center'
                        , borderWidth: 0, borderColor: 'rgba(255,117,25,0.5)',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.00,

                        elevation: 24,

                    }}>
                        <View style={{ width: '50%', height: '100%', borderBottomLeftRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.text}>146K Watching</Text>
                        </View>
                        <View style={{ width: '50%', height: '100%', borderBottomRightRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.bannerButton}>

                                <TouchableOpacity style={styles.button}>
                                    <View style={{ borderBottomEndRadius: 0, borderRadius: 10, backgroundColor: '#c454f0dd' }}>
                                        <Text style={{ fontSize: 20 }}>Hola</Text>
                                    </View>

                                </TouchableOpacity>

                            </View>
                        </View>
                    </View> */}

                </View>
                <View style={styles.cards}>
                    <View style={{ backgroundColor: '#FFFFFF', width: '100%', height: '70%', borderRadius: 25 }} >
                        <Image source={require('../assets/fortnite.png')} style={{ width: '100%', height: '100%', borderTopLeftRadius: 25, borderTopRightRadius: 25, resizeMode: 'cover' }} />
                    </View>
                    <View style={{ backgroundColor: '#FF7617', width: '100%', height: '30%', borderBottomLeftRadius: 25, borderBottomRightRadius: 25, flexDirection: 'row', alignItems: 'center', shadowColor: '#FF7617' }}>
                        <View style={{ backgroundColor: '#FF7617', width: '40%', height: '100%', borderBottomLeftRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>Hola</Text>
                        </View>
                        <View style={{ backgroundColor: '#FF7617', width: '60%', height: '100%', borderBottomRightRadius: 25, justifyContent: 'center' }}>
                            <Button title="Learn More" color="#841584" accessibilityLabel="Learn more about this purple button"
                            />
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#181828', width: 380, height: 100, marginTop: 20 }} />
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: '#181828',
    },
    cards: {
        width: 380,
        height: 400,
        backgroundColor: '#181828',
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 25,
        alignItems: 'center',
        flexDirection: 'column',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#FC4601",
        padding: 10,
        width: '80%',
        borderRadius: 25,
        shadowColor: '#000000',
        elevation: 20,
        marginRight: 10,

    },
    bannerButton: {
        width: '95%',
        height: '50%',
        alignItems: 'flex-end',
        backgroundColor: '#171A21',
        justifyContent: 'center',
        borderRadius: 25,
    },
    bannerView: {
        width: '95%',
        height: '95%',
        alignItems: 'center',
        backgroundColor: '#171A21',
        justifyContent: 'center',
        borderBottomLeftRadius: 25,
        flexDirection: 'column',
    }


});


// const prueba = StyleSheet.create({
//     droidSafeArea: {
//         flex: 1,
//         paddingTop: Platform.OS === 'android' ? 0 : 0,
//         backgroundColor: 'lightblue',
//     },
// });

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: 'green',
//         flex: 1,
//     },
//     cards: {
//         width: '95%',
//         height: '60%',
//         backgroundColor: '#181828',
//         marginTop: 10,
//         alignSelf: 'center',
//         borderRadius: 25,
//         alignItems: 'center',
//         flexDirection: 'column',
//     },
//     text: {
//         color: '#fff'
//     }
// });

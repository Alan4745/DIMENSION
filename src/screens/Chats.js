import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeChat from '../components/Chats/HomeChtas';
import ProfileInfo from '../components/common/ProfileInfo';

export default function Chats() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.text}>Friends</Text>
        <View style={styles.iconBanner}>
          <TouchableHighlight>
            <View style={styles.button}>
              <Icon name='comments' color={'#fff'} size={25} />
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={styles.button}>
              <Icon name='edit' color={'#fff'} size={25} />
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <HomeChat />
      <HomeChat />
      <HomeChat />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  banner: {
    backgroundColor: '#000000',
    height: 70,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#4D4D4D',
    marginLeft: 10,
    marginRight: 10
  },
  iconBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  button: {
    alignItems: "center",
    // backgroundColor: "#DDDDDD",
    padding: 10,
    marginRight: 5,
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#fff'
  },



});
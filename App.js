import React from "react";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Navigation from "./src/navigation/Navigation";
import { Button, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#181828',
  },
};


export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar />
      <Navigation />
    </NavigationContainer>
  );
}
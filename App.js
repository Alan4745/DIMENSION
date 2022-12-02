import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./src/navigation/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
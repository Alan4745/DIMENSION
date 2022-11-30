import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Navigation style={styles.container}/>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF1D1D',
    flex: 1,
  },
});
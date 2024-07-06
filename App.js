import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ImageProvider } from './components/ImageContext';
import Home from './components/Home';
import ContactData from './components/ContactData'
import Details from './components/Details'

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default function App() {
  return (
    <ImageProvider>
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Contact List" component={ContactData} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
    </ImageProvider>
  );
}

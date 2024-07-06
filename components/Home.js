import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Contact App</Text>
      <Image source={require('../assets/contact.jpeg')} style={styles.image} />
      <Text style={styles.subtitle}>Wanna looking for a contact ?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Contact List')}
      >
        <Text style={styles.buttonText}>Contact List</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B928CD',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 140, // Adjusted to reduce large space
    marginTop: 12,
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100, // Adjusted to make the image fully round
  },
  button: {
    backgroundColor: '#60DE42',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Home;

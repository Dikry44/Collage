import React, { useContext } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImageContext } from './ImageContext';


const Details = ({ route }) => {
  const navigation = useNavigation();
  const { selectedImage } = useContext(ImageContext);
  const { name, job, telepon, hobi } = route.params;

  const handleBackToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={selectedImage} style={styles.photo} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.job}>{job}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailLabel}>Nomor HP:</Text>
        <Text style={styles.detailText}>{telepon}</Text>
        <Text style={styles.detailLabel}>Hobi:</Text>
        <Text style={styles.detailText}>{hobi}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleBackToHome}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  job: {
    fontSize: 18,
    color: '#555',
  },
  details: {
    marginTop: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailText: {
    marginBottom: 10,
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

export default Details;

import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImageContext } from './ImageContext'

const Contact = (props) => {
  const navigation = useNavigation();
  const { setSelectedImage } = useContext(ImageContext);


  const handleDetailsPress = () => {
    setSelectedImage(props.foto); // Menyimpan gambar saat tombol Details ditekan
    navigation.navigate('Details', {
      name: props.name,
      job: props.job,
      telepon: props.telpon,
      hobi: props.Hobi,
    });
  };

  return (
    <View style={styles.container}>
      <Image source={props.foto} style={styles.img} />
      <View style={styles.teks}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.telp}>{props.telpon}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleDetailsPress}
      >
        <Text style={styles.buttonText}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue'
  },
  img: {
    margin: 15,
    width: 50,
    height: 50,
    borderRadius: 25
  },
  teks: {
    flex: 0.8
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  telp: {
    fontSize: 14,
    color: '#3498db'
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

export default Contact;

// BreedImagesScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

const BreedImagesScreen = ({ route }) => {
  const { breed } = route.params;
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchBreedImages();
  }, []);

  const fetchBreedImages = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
      const data = await response.json();
      setImages(data.message);
    } catch (error) {
      console.error('Error fetching breed images:', error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Image source={{ uri: item }} style={styles.image} />}
      />
    </View>
  );
};

export default BreedImagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 10,
  },
});

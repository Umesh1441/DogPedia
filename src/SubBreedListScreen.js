// SubBreedListScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SubBreedListScreen = ({ route, navigation }) => {
  const { breed } = route.params;
  const [subBreeds, setSubBreeds] = useState([]);

  useEffect(() => {
    fetchSubBreeds();
  }, []);

  const fetchSubBreeds = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/list`);
      const data = await response.json();
      setSubBreeds(data.message);
    } catch (error) {
      console.error('Error fetching sub-breeds:', error);
    }
  };

  const handleSubBreedClick = (subBreed) => {
    navigation.navigate('BreedImages', { breed: `${breed}/${subBreed}` });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={subBreeds}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSubBreedClick(item)} style={styles.item}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SubBreedListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
  },
});

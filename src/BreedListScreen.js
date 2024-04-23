// BreedListScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BreedListScreen = ({ navigation }) => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await response.json();
      setBreeds(Object.keys(data.message));
    } catch (error) {
      console.error('Error fetching breeds:', error);
    }
  };

  const handleBreedClick = (breed) => {
    navigation.navigate('SubBreedList', { breed });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={breeds}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleBreedClick(item)} style={styles.item}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContactForm')} >
          <Text style={styles.buttonText}>ContactForm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Main Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BreedListScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
  },
  buttonContainer: {
    height:50,
    backgroundColor:'green',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignSelf:'center',
    width: '100%',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  button: {
    // backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

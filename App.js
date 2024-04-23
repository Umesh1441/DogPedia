import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BreedListScreen from './src/BreedListScreen';
import SubBreedListScreen from './src/SubBreedListScreen';
import BreedImagesScreen from './src/BreedImagesScreen';
import ContactForm from './src/ContactForm';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BreedList">
        <Stack.Screen name="ContactForm" component={ContactForm} options={{ title: 'Contact Form' }} />
        <Stack.Screen name="BreedList" component={BreedListScreen} options={{ title: 'Dog Breeds' }} />
        <Stack.Screen name="SubBreedList" component={SubBreedListScreen} options={{ title: 'Sub Breeds' }} />
        <Stack.Screen name="BreedImages" component={BreedImagesScreen} options={{ title: 'Breed Images' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

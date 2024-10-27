// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const HomeScreen = () => {
  const { toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Trocar Tema" onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
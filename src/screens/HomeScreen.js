import React from 'react';
import { View } from 'react-native'; // Importa View do react-native
import { Button, Text } from 'react-native-paper'; // Importa Button e Text do Paper
import { useTheme } from '../context/ThemeContext';

const HomeScreen = () => {
  const { theme, toggleTheme } = useTheme(); // Acessa o theme e o toggleTheme do contexto

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.background }}>
      <Text style={{ color: theme.text }}>Home Screen</Text>
      <Button onPress={toggleTheme}>Trocar Tema</Button>
    </View>
  );
};

export default HomeScreen;
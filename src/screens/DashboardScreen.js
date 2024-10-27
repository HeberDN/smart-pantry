import React from 'react';
import { View} from 'react-native';
import { Text } from 'react-native-paper';
import { useTheme } from '../context/ThemeContext';

const DashboardScreen = () => {
  const { theme, toggleTheme } = useTheme(); // Acessa o theme e o toggleTheme do contexto

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.background }}>
      <Text style={{ color: theme.text }}>Dashboard Screen</Text>
    </View>
  );
};

export default DashboardScreen;
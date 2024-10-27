// src/App.js
import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext'; // Importa o ThemeProvider
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
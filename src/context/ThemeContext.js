import React, { createContext, useContext, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import themes from '../themes/theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');
  const toggleTheme = () => {
    setThemeName(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const theme = {
    ...themes[themeName],
    // Adicione mais propriedades se necessário para o Paper
  };

  return (
    <PaperProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </PaperProvider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

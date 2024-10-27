import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext'; // Importa o contexto de tema
import HomeScreen from '../screens/HomeScreen'; // Importa as telas
import DashboardScreen from '../screens/DashboardScreen';
import NewEntryScreen from '../screens/NewEntryScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Foundation from '@expo/vector-icons/Foundation'; // Importa ícones da biblioteca Foundation
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; // Importa ícones da biblioteca FontAwesome5

// Cria um navegador de abas
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  // Obtém o tema atual do contexto
  const { theme } = useTheme();

  return (
    // Contêiner de navegação
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // Define o ícone da aba com base na rota
          tabBarIcon: ({ focused }) => {
            let iconName; // Nome do ícone
            let IconComponent; // Componente do ícone
            
            // Define o ícone e o componente de acordo com a rota
            switch (route.name) {
              case 'Home':
                iconName = 'home'; // Nome do ícone
                IconComponent = Foundation; // Componente de ícone
                break;
              case 'Dashboard':
                iconName = 'graph-trend';
                IconComponent = Foundation;
                break;
              case 'Nova Entrada':
                iconName = 'plus';
                IconComponent = Foundation;
                break;
              case 'Produtos':
                iconName = 'boxes';
                IconComponent = FontAwesome5; // Usa FontAwesome5 para Produtos
                break;
              case 'Profile':
                iconName = 'torso';
                IconComponent = Foundation;
                break;
              default:
                return null; // Retorna nulo se a rota não for reconhecida
            }

            // Define a cor do ícone com base no estado de foco
            const color = focused ? theme.tabActive : theme.tabInactive;

            // Retorna o ícone apropriado
            return <IconComponent name={iconName} size={24} color={color} />;
          },
          // Define as cores das abas ativas e inativas
          tabBarActiveTintColor: theme.tabActive,
          tabBarInactiveTintColor: theme.tabInactive,
          // Estilo da barra de abas
          tabBarStyle: { backgroundColor: theme.background },
        })}
      >
        {/* Define as telas do Tab Navigator */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Nova Entrada" component={NewEntryScreen} />
        <Tab.Screen name="Produtos" component={ProductsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
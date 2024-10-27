// AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import HomeScreen from '../screens/HomeScreen';
import DashboardScreen from '../screens/DashboardScreen';
import NewEntryScreen from '../screens/NewEntryScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let IconComponent;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                IconComponent = Foundation;
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
                IconComponent = FontAwesome5;
                break;
              case 'Profile':
                iconName = 'torso';
                IconComponent = Foundation;
                break;
              default:
                return null;
            }

            const color = focused ? theme.tabActive : theme.tabInactive;
            return <IconComponent name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: theme.tabActive,
          tabBarInactiveTintColor: theme.tabInactive,
          tabBarStyle: { backgroundColor: theme.tabBackground },
          headerStyle: { backgroundColor: theme.background }, // Define a cor de fundo do cabeçalho
          headerTintColor: theme.text, // Define a cor do texto do cabeçalho
          headerTitleStyle: { color: theme.text }, // Define a cor do título do cabeçalho
        })}
      >
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

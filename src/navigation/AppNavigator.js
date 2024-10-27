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
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            switch (route.name){
                case 'Home':
                    iconName = 'home';
                    break;
                case 'Dashboard':
                    iconName = 'graph-trend';
                    break;
                case 'Nova Entrada':
                    iconName = 'plus'; 
                    break;
                case 'Produtos':
                    iconName = 'shopping-cart'; 
                    break;
                case 'Profile':
                    iconName = 'torso'; 
                    break;
                default:
                    return null; 
            }
            const color = focused ? theme.tabActive : theme.tabInactive;
            return <Foundation name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: theme.tabActive,
          tabBarInactiveTintColor: theme.tabInactive,
          tabBarStyle: { backgroundColor: theme.background },
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
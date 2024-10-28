import React from 'react';
import { View, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useTheme } from 'react-native-paper';

const CircleButton = ({ focused }) => {
    const { theme } = useTheme() || {};

    const iconColor = focused ? theme?.tabActive || '#FFFFFF' : theme?.tabInactive || '#A9A9A9';
    
    return (
        <View style={styles.circle}>
            <AntDesign name="plus" size={24} color={iconColor} />
        </View>
    );
};

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#40E0D0', // Azul Tiffany
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    color: '#FFFFFF',
  },
});

export default CircleButton;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewEntryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Nova Entrada Screen</Text>
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

export default NewEntryScreen;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Products Screen</Text>
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

export default ProductsScreen;
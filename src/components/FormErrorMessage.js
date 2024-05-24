import React from 'react';
import { StyleSheet, Text } from 'react-native';


export const FormErrorMessage = ({ error, visible }) => {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.errorText}>{error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    marginLeft: 15,
    fontSize: 16,
    marginVertical: 8,
    fontWeight: '600'
  }
});
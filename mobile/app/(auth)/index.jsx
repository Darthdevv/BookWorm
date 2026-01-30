import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '@/constants/colors';

export default function Login() {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>LoginScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
});

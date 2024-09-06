import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from './Footer';
const Dashboard = (navigation) => {

  return (
    <View style={styles.container}>
     <Footer navigation={navigation} activeButton={'home'}/>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full height
  },
  content: {
    flex: 1, // Takes remaining space
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  footerContainer: {
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Full width
  },
  footerText: {
    textAlign: 'center',
  },
});


export default Dashboard

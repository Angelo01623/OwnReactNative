import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native-paper';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const Footer = ({ activeButton}) => {
  const navigation = useNavigation(); // Use the hook to get navigation

  // const currentUser = getCurrentUser();
  const [currentActiveButton, setCurrentActiveButton] = useState(activeButton);

  useEffect(() => {
    setCurrentActiveButton(activeButton);
  }, [activeButton]);

  return (
    // added View
    <View style={styles.container}>
   
    <View style={styles.footerContainer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
           navigation.navigate('Dashboard');
          }}
        >
          <Ionicons name="home-outline" size={29} color={currentActiveButton === 'home' ? '#dd4814' : '#000'} />
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
           navigation.navigate('Profile');
          }}
        >
          <Ionicons name="person-outline" size={29} color={currentActiveButton === 'profile' ? '#dd4814' : '#000'} />
          <Text style={styles.buttonText}>My Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1, // Make the container take the full height of the screen
  justifyContent: 'flex-end', // Push the View of footer  to the bottom
},
footerContainer: {
  backgroundColor: '#fff',
  padding: 10,
  alignItems: 'center',
  width: '100%', // Make the footer take full width
},
buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%', // Make the button container take full width
  paddingHorizontal: 20,
},
button: {
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'transparent',
  padding: 10,
  borderRadius: 5,
  marginHorizontal: 5,
  flex: 1, // Allow the buttons to grow
},

buttonText1: {
  color: '#000',
  marginBottom: 4,
  fontSize: 12,
},
buttonText: {
  color: '#000',
  marginTop: 5,
  fontSize: 12,
},
});
export default Footer

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MemberLogin from './components/MemberLogin';
import Dashboard from './components/Dashboard';
import MemberRegister from './components/MemberRegister';
import Footer from './components/Footer';
import Profile from './components/Profile';
import MemberInfo from './components/MemberInfo';

const Stack = createNativeStackNavigator();

export default function App() {
  const [name, setName] = useState("Michael Angelo");
  console.log(name);

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name=" "
          component={MemberLogin}
          options={{ headerShown: false }}  
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard} 
        />
      
      <Stack.Screen
          name="Register"
          component={MemberRegister}  
        />

        <Stack.Screen
          name="Foot"
          component={Footer}  
        />

      <Stack.Screen
          name="Profile"
          component={Profile}
            options={{ headerShown: false }}
        />

      <Stack.Screen
          name="Personal Information"
          component={MemberInfo}
            // options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

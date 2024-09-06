import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';

const MemberLogin = ({ navigation }) => {
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    if (username === 'michael' && password === '123') {
      console.log("Login Successful");
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('Invalid Credentials', 'Please enter a valid username and password.');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/loginBackground.jpg')}  // Adjust the path to your background image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.logintext}>Welcome</Text>
        <TextInput
          style={[styles.input,{marginBottom:25}]}
          placeholder="Username"
          onChangeText={setUserName}
          value={username}
        />
        <TextInput
          style={[styles.input,{marginBottom:10}]}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnForgetpass}
          onPress={() => {
            console.log("Forget Pass Pressed");
         navigation.navigate('Foot');
          }}
        >
          <Text style={styles.buttonText1}>Forget Password</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.createAccountText1}>Create account</Text>
        
        <TouchableOpacity
        style={styles.btnRegister}  
        onPress={() => {
            console.log("Register Pressed");
            //  navigation.navigate('Register');
             navigation.navigate('Register', { username });
          }}
        >
          <Text style={styles.createAccountText}>Register</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cover the whole screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 60,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
    fontSize:22
  },
  button: {
    height: 55,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    backgroundColor: '#007BFF', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60, 
  },
 btnForgetpass: {
  height: 55,
  marginTop: 20,
  padding: 10,
  width: '50%',
  backgroundColor: 'transparent', 
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 60,             
},
btnRegister: {
  height: 45,
  marginTop: 34,
  padding: 10,
  width: '30%',
  backgroundColor: 'transparent',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 60,            
  bottom:-140,
  marginRight:-125
},
  buttonText: {
    color: '#fff',  
    fontSize: 22,
  },
  buttonText1: {
    color: '#000',  
    fontSize: 15,
  },
  logintext: {
    fontSize: 60,
    color: '#000', 
    marginBottom: 50,
    marginRight:15
  },
  createAccountText: {
    color: '#007BFF',
    fontSize: 18,
    bottom: 3,  
    textDecorationLine: 'underline', 
     marginLeft: 5,
    // marginRight:20
  },
  createAccountText1: {
    color: '#000',
    fontSize: 18,
    bottom: -205, 
    marginLeft:-65
  },
});

export default MemberLogin;

import React, { useState} from 'react'; 
import { StyleSheet, Text, View,
  TouchableOpacity,Alert, Button} from 'react-native';

export default function App() {

  const [name, SetName] = useState("Michael Angelo");
  console.log(name)
  
  return (
    <View style={styles.container}>
      <Text style={{color:"black"}}>Open up {name}.js to start working on your app!</Text>
      {/* <StatusBar style="auto" /> */}
    <View style={{marginTop:24}}>
    <Button 
  
                // Some properties given to Button 
                title="Click Me"
                onPress={() =>
                 Alert.alert('Its GeeksforGeeks !')
                //  asasdasadsadsads
                 } 
                 
            /> 
    </View>
    </View>
    
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

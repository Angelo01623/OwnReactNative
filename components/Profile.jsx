import React, {useRef, useState} from 'react';
import { DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Footer from './Footer'; // Footer should not import Profile
import {PaperProvider, Card, Divider, } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
const Profile = () => {

  const [activeButton, setActiveButton] = useState('profile');
  const navigation = useNavigation(); // Use the hook to get navigation
  const [isLoading, setIsLoading] = useState(false);
  const drawer = useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      setActiveButton('profile'); // Update active button when screen is focused
    }, [])
  );

 

  const openDrawer = () => {
    drawer.current.openDrawer();
  };

  const closeDrawer = () => {
    drawer.current.closeDrawer();
  };

  const [drawerPosition, setDrawerPosition] = useState('left');
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => (
         <PaperProvider>
      <View style={{
       backgroundColor:'#ececec', 
       justifyContent:'flex-start',
       zIndex: -1, // Send this view to the back
       position: 'relative', // Ensure that zIndex works by setting position
       paddingTop:40,
       flex:1,
       width:"100%"
       }}>

      <ScrollView>
      <Card style={{ alignItems: 'left',height:150, borderRadius:0, backgroundColor:'#7695FF', }}>
      <Card.Content>
      <View style={{ flexDirection: 'row',  justifyContent: 'flex-end',  alignItems:'center', alignContent:'center',marginTop:"15%"}}>
            <TouchableOpacity
              disabled={isLoading}
              style={{ alignItems: 'center' }}
              onPress={() => {
                navigation.navigate('Personal Information');
               console.log("Member info pressed")
              }}
            >
            <Text style={{ color: "white", textAlign: 'center', fontSize: 30 }}> {'>'} </Text>
            </TouchableOpacity>
            </View>
      </Card.Content>
      </Card>
      </ScrollView>



    </View>

    </PaperProvider>
  );

  
  return (

    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
  <View style={styles.container}>
        <TouchableOpacity onPress={openDrawer} style={styles.hamburgerIcon}>
          <Ionicons name="menu" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={[styles.paragraph, { color: 'black' }]}>
         Profile
        </Text>
        {/* <Button title="Open drawer" onPress={openDrawer} /> */}
      </View>
          <Footer navigation={navigation} activeButton="profile" />
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    flexDirection:"row"
  },
  paragraph: {
    fontSize: 25,
    position: 'absolute',
    top: "10%",
    left: "15%",
    flex:1,
  },
  hamburgerIcon: {
    position: 'absolute',
    flex:1,
    top: "10%",
    left: "5%",
    zIndex: 1,
  },
});
export default Profile;
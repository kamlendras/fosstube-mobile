// App.js
import * as React from "react";
import {
  Text, View,
  Platform, StatusBar
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
// import { Icon } from "@react-native-material/core";
import { Entypo } from '@expo/vector-icons'; 
import { StyleSheet } from 'react-native';
import MainContainer from './navigation/MainContainer';
import {SafeAreaProvider} from 'react-native-safe-area-context' ;
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#fff" }}>
    <View style={styles.container} >
  
      <AppBar  
    title="CODE"
    color="#212121"
    tintColor="white"
    leading={props => (
      <IconButton icon={props => <Entypo name="code" size={24} {...props} />}
       {...props} />
    )}
    trailing={props => (
      <HStack>
         <IconButton
          icon={props => <Icon name="cast" {...props} />}
          {...props}
        />
        <IconButton
          icon={props => <Icon name="bell-outline" {...props} />}
          {...props}
        />
        <IconButton
          icon={props => <Icon name="magnify" {...props} />}
          {...props}
        />
        <IconButton
          icon={props => <Icon name="account-circle-outline" {...props} />}
          {...props}
        />
      </HStack>
    )}
  />
    {/* <NavigationContainer>
    
    <Stack.Navigator>
        <Stack.Screen name="one"  screenOptions={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer> */}
      <MainContainer/>
    </View>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    textcolor:"white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
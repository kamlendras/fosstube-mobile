/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import { createStackNavigator, TransitionSpecs,
   HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
   import {  FAB } from "@react-native-material/core";
  //  import { Stack} from "@react-native-material/core";

import Iconx from "@expo/vector-icons/MaterialCommunityIcons";

import { StatusBar,View,StyleSheet,Text,Easing } from 'react-native';
import React, { useState } from "react";
import Dialog from "react-native-dialog";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from './components/Search';
import Notification from './components/Notification';
import Account from './components/Account';
import { Link } from '@react-navigation/native';

import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Entypo } from '@expo/vector-icons'; 
import MainContainer from './navigation/MainContainer';
import {SafeAreaProvider} from 'react-native-safe-area-context' ;
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Logow from './assets/logow'
const Stack = createNativeStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  }
}

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  }
}

const customTransition = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            })
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: ["180deg", "0deg"],
            }),
          },
          {
            scale: next ?
              next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.7],
              }) : 1,
          }
        ]
      },
      opacity: current.opacity,
    }
  }
}


export default function App() {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

 

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };
  
  return (
    
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "white", barStyle: "light-content"}}>
       <StatusBar
  barStyle="light-content" backgroundColor="#212121" />
    <View style={styles.container} >
 
      <AppBar  
    title="CODE"
    color="#212121"
    tintColor="white"
    leading={props => (
      <IconButton icon={props => <Logow width={30} height={30}{...props} />}
       {...props} />
    )}
    trailing={props => (
      <HStack>
         <IconButton icon={props => <Icon name="cast" {...props} />}
          {...props}
          onPress={showDialog}
          />
          <View style={styles2.container}>
          <Dialog.Container visible={visible}>
        <Dialog.Title>Connect to a device</Dialog.Title>
        <Dialog.Description>searching for devices
        </Dialog.Description>
        <Dialog.Description><MaterialIcons name="connected-tv" size={20} color="black" /> Link with TV code
        </Dialog.Description>
        <Dialog.Description>
        <AntDesign name="infocirlceo" size={16} color="black" /> Learn more
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        {/* <Dialog.Button label="Delete" onPress={handleDelete} /> */}
      </Dialog.Container>
      </View>
      {/* <NavigationContainer>   
      <Stack.Navigator>
        <Stack.Screen name="one"  screenOptions={{ headerShown: false }} component={Search} /> */}
         <NavigationContainer >
     <Stack.Navigator
      // apply for all screen
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    // headerMode="none"
     >
      <Stack.Screen name="Home" component={Search} />
      {/* <IconButton
        
      
     /> */}
      <Stack.Screen name="." component={Search}
        icon={props => <Icon name="bell-outline" {...props}  component={Search} />}
        {...props} 
        options={{
          gestureDirection: 'vertical',
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
     </Stack.Navigator> 
     </NavigationContainer>
   
        
  
        <IconButton
          icon={props => <Icon name="magnify" {...props} />  }
          {...props}   onPress={showDialog}
        />
  
        <IconButton
          icon={props => <Icon name="account-circle-outline" {...props} />}
          {...props}
        />
      </HStack>
    )}
  />
      <MainContainer/>
    </View>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#212121",
    // barStyle: "light-content",
  
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }})

  
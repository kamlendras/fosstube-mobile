import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { View, Text } from "react-native";
// Screens
import Home from './screens/Home';
import Play from './screens/Play';
import Library from './screens/Library';
import People from './screens/People';
import Homeicon from '../assets/Home.svg';
import HomeOutline from '../assets/HomeOuline.svg';

const customTabBarStyle = {
  activeTintColor: '#1e88e5',
  inactiveTintColor: '#616161',
  backgroundColor: 'blue',
}
 const Tab = createBottomTabNavigator();
function MainContainer() {
return (
  
  <NavigationContainer >

  <Tab.Navigator
  initialRouteName="Home"
  // activeColor="black"
  tabBarOptions={customTabBarStyle}
  
  shifting="false">
  <Tab.Screen
  useHeaderHeight={false} 
  // hide hedder
  name="Home"
  options={{
      tabBarLabel: 'Home',
      headerShown: false,
      tabBarIcon: ({ color ,focused}) => (
        <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
      
      )
  }}
  component={Home} />
  <Tab.Screen
   useHeaderHeight={false} 
  name="Play"
  options={{
      tabBarLabel: 'Play',
      headerShown: false,
      tabBarIcon: ({ color,focused }) => (
        <MaterialIcons name={focused ? "play-circle-fill" : "play-circle-outline"} size={30} color={color} />
      )
  }}
  component={Play} />
  <Tab.Screen
   useHeaderHeight={false} 
  name="Add"
  
  options={{
    // tabBarLabel: '',
      // tabBaMaterialIconsel: '',
      title:"",
      headerShown: false,
      tabBarIcon: ({ color }) => (
          <View
          style={{
              position: 'absolute',
              bottom: -15, // space from bottombar
              height: 50, 
              width: 50, 
              borderRadius: 50,
              // marginBottom : 0,
              justifyContent: 'center',
              alignItems: 'center',
          }}
          >
          <MaterialIcons name="add-circle-outline" color={color} size={50} />
          </View>
      )
  }}
  component={Home}
  />
  <Tab.Screen
   useHeaderHeight={false} 
  name="People"
  options={{
      tabBarLabel: 'People',
      headerShown: false,
      tabBarIcon: ({ color,focused }) => (
        < Ionicons name={focused ? "ios-people" : "ios-people-outline"} size={30} color={color} />
      )
  }}
  component={People} />
  <Tab.Screen
   useHeaderHeight={false} 
  name="Library"
  options={{
      tabBarLabel: 'Library',
      headerShown: false,
      tabBarIcon: ({ color,focused }) => (
        < Ionicons name={focused ? "library" : "library-outline"} size={30} color={color} />
      )
  }}
  component={Library} />
  </Tab.Navigator>
   </NavigationContainer>
   
);
}
export default MainContainer;
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Home from "./screens/Home";
import Myspace from "./screens/Myspace";
import Notification from "./screens/Notification"

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function HomepageOverview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen 
      name='Home'
      component={Home}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (<Ionicons name='home' color={color} size={size} />)
      }} />
      <BottomTabs.Screen 
      name="My Space"
      component={Myspace}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (<Ionicons name='laptop' color={color} size={size} />)
      }}
      />
      <BottomTabs.Screen  
      name='Notification'
      component={Notification}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (<Ionicons name='notifications' color={color} size={size} />)
      }}
      />
    </BottomTabs.Navigator>
  )
}


export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen 
        name="Home Overview"
        component={HomepageOverview}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({});

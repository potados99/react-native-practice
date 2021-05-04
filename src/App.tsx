/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './features/home/HomeScreen';
import SettingsScreen from './features/settings/SettingsScreen';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={isDarkMode ? 'black' : 'white'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />

      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

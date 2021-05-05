/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyNavigator from './features/navigation/MyNavigator';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar
        translucent={false}
        backgroundColor={isDarkMode ? 'black' : 'white'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <MyNavigator />
    </NavigationContainer>
  );
}

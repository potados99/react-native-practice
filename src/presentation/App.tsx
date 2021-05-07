/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import MyNavigator from './navigation/MyNavigator';
import {Provider} from 'react-redux';
import {store, persistedStore} from '../store/MyGlobalStore';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
          <StatusBar
            translucent={false}
            backgroundColor={isDarkMode ? 'black' : 'white'}
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          />
          <MyNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

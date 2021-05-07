/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyNavigator from './navigation/MyNavigator';
import color from './res/color';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar
          translucent={false}
          backgroundColor={color.white}
          barStyle={'dark-content'}
        />
        <MyNavigator />
      </NavigationContainer>
    );
  }
}

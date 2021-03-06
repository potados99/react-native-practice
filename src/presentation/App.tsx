/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyNavigator from './navigation/MyNavigator';
import color from './res/color';
import {Provider} from 'mobx-react';
import RootStore from '../store/RootStore';

export default class App extends React.Component {
  render() {
    const rootStore = new RootStore();

    return (
      <Provider {...rootStore}>
        <NavigationContainer>
          <StatusBar
            translucent={false}
            backgroundColor={color.white}
            barStyle={'dark-content'}
          />
          <MyNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {StackNavigationConfig} from '@react-navigation/stack/lib/typescript/src/types';

export type SimpleStackNavigatorConfig = {
  screens: NavigationScreen[];
} & StackNavigationConfig;

export type NavigationScreen = {
  name: string;
  component: React.ComponentType<any>;
};

type Config = {
  config: SimpleStackNavigatorConfig;
};

export default function SimpleStackNavigator<
  Params extends Record<string, object | undefined>
>({config}: Config) {
  const Stack = createStackNavigator<Params>();

  return (
    <Stack.Navigator
      mode={config.mode}
      headerMode={config.headerMode}
      keyboardHandlingEnabled={config.keyboardHandlingEnabled}
      detachInactiveScreens={config.detachInactiveScreens}
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      {config.screens.map(tab => (
        <Stack.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
        />
      ))}
    </Stack.Navigator>
  );
}

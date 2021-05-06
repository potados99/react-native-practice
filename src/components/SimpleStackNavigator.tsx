import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {
  StackHeaderOptions,
  StackNavigationConfig,
  StackNavigationOptions,
} from '@react-navigation/stack/lib/typescript/src/types';

export type SimpleStackNavigatorConfig = {
  screens: NavigationScreen[];
  stackNavigationConfig?: StackNavigationConfig;
  stackHeaderCommonOptions?: StackHeaderOptions;
};

export type NavigationScreen = {
  name: string;
  component: React.ComponentType<any>;
  options?: StackHeaderOptions & StackNavigationOptions;
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
      mode={config.stackNavigationConfig?.mode}
      headerMode={config.stackNavigationConfig?.headerMode}
      keyboardHandlingEnabled={
        config.stackNavigationConfig?.keyboardHandlingEnabled
      }
      detachInactiveScreens={
        config.stackNavigationConfig?.detachInactiveScreens
      }
      screenOptions={{
        ...config.stackHeaderCommonOptions,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      {config.screens.map(tab => (
        <Stack.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={tab.options}
        />
      ))}
    </Stack.Navigator>
  );
}

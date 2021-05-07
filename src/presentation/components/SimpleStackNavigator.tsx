import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {
  StackHeaderOptions,
  StackNavigationConfig,
  StackNavigationOptions,
} from '@react-navigation/stack/lib/typescript/src/types';
import {Platform} from 'react-native';
import BackIcon from './BackIcon';
import color from '../res/color';

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
      {...defaultStackNavigationConfig}
      {...config.stackNavigationConfig}
      screenOptions={{
        ...defaultStackHeaderCommonOptions,
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

/*--------------------- Default settings here --------------------*/

const defaultStackNavigationConfig: StackNavigationConfig = {
  headerMode: 'screen',
};

const defaultStackHeaderCommonOptions: StackHeaderOptions = {
  headerBackTitleVisible: false,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTintColor: color.textPrimary,
  headerTruncatedBackTitle: undefined,
  headerLeftContainerStyle: {
    left: Platform.OS === 'ios' ? 12 : 0,
  },
  headerBackImage: () => <BackIcon />,
};

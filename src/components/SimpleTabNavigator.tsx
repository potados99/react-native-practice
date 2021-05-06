import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabBarOptions} from '@react-navigation/bottom-tabs/src/types';

export type SimpleTabNavigatorConfig = {
  tabs: NavigationTab[];
  bottomTabBarOptions?: BottomTabBarOptions;
};

export type NavigationTab = {
  name: string;
  iconName: (focused: boolean) => string;
  component: React.ComponentType<any>;
};

type Config = {
  config: SimpleTabNavigatorConfig;
};

export default function SimpleTabNavigator({config}: Config) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return (
            <Icons
              name={
                config.tabs
                  ?.find(tab => tab.name === route.name)
                  ?.iconName(focused) || ''
              }
              size={size}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={config.bottomTabBarOptions}>
      {config.tabs.map(tab => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
}

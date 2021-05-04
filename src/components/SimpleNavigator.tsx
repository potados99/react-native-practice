import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type NavigationTab = {
  name: string;
  iconName: (focused: boolean) => string;
  component: React.ComponentType<any>;
};

export type SimpleNavigatorConfig = {
  tabs: NavigationTab[];
  activeTintColor: string;
  inactiveTintColor: string;
};

export default function SimpleNavigator({
  config,
}: {
  config: SimpleNavigatorConfig;
}) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return (
            <Ionicons
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
      tabBarOptions={{
        activeTintColor: config.activeTintColor,
        inactiveTintColor: config.inactiveTintColor,
      }}>
      {config.tabs.map(tab => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
}

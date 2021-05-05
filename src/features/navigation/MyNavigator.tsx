import React from 'react';
import HomeScreen from '../home/HomeScreen';
import SettingsStackScreen from '../settings/SettingsStackScreen';
import SimpleTabNavigator, {
  SimpleTabNavigatorConfig,
} from '../../components/SimpleTabNavigator';

const config: SimpleTabNavigatorConfig = {
  tabs: [
    {
      name: 'Home',
      iconName: focused => (focused ? 'home' : 'home-outline'),
      component: HomeScreen,
    },
    {
      name: 'Settings',
      iconName: focused => (focused ? 'settings' : 'settings-outline'),
      component: SettingsStackScreen,
    },
  ],

  bottomTabBarOptions: {
    activeTintColor: '#0088FF',
    inactiveTintColor: 'grey',
  },
};

export default function MyNavigator() {
  return <SimpleTabNavigator config={config} />;
}

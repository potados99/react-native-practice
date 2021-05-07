import React from 'react';
import HomeScreen from '../features/home/HomeScreen';
import CounterScreen from '../features/counter/CounterScreen';
import SettingsStackScreen from '../features/settings/SettingsStackScreen';
import SimpleTabNavigator, {
  SimpleTabNavigatorConfig,
} from '../components/SimpleTabNavigator';

const config: SimpleTabNavigatorConfig = {
  tabs: [
    {
      name: 'Home',
      iconName: focused => (focused ? 'home' : 'home-outline'),
      component: HomeScreen,
    },
    {
      name: 'Counter',
      iconName: focused => (focused ? 'paw' : 'paw-outline'),
      component: CounterScreen,
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

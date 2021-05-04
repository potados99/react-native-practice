import React from 'react';
import HomeScreen from '../home/HomeScreen';
import SettingsScreen from '../settings/SettingsScreen';
import SimpleNavigator, {
  SimpleNavigatorConfig,
} from '../../components/SimpleNavigator';

const config: SimpleNavigatorConfig = {
  tabs: [
    {
      name: 'Home',
      iconName: focused => (focused ? 'home' : 'home-outline'),
      component: HomeScreen,
    },
    {
      name: 'Settings',
      iconName: focused => (focused ? 'settings' : 'settings-outline'),
      component: SettingsScreen,
    },
  ],
  activeTintColor: '#0088FF',
  inactiveTintColor: 'grey',
};

export default function MyNavigator() {
  return <SimpleNavigator config={config} />;
}

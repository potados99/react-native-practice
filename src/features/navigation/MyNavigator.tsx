import React from 'react';
import HomeScreen from '../home/HomeScreen';
import SettingsStackScreen from '../settings/SettingsStackScreen';
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
      component: SettingsStackScreen,
    },
  ],
  activeTintColor: '#0088FF',
  inactiveTintColor: 'grey',
};

export default function MyNavigator() {
  return <SimpleNavigator config={config} />;
}

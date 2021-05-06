import React from 'react';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import SimpleStackNavigator, {
  SimpleStackNavigatorConfig,
} from '../../components/SimpleStackNavigator';

const config: SimpleStackNavigatorConfig = {
  screens: [
    {
      name: 'Settings',
      component: SettingsScreen,
    },
    {
      name: 'Profile',
      component: ProfileScreen,
    },
  ],

  stackNavigationConfig: {
    headerMode: 'screen',
  },
};

export type SettingsStackParamList = {
  Settings: undefined;
  Profile: {userId: string};
};

export default function SettingsStackScreen() {
  return <SimpleStackNavigator<SettingsStackParamList> config={config} />;
}

import React from 'react';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import SimpleStackNavigator, {
  SimpleStackNavigatorConfig,
} from '../../components/SimpleStackNavigator';
import colors from '../../res/colors';
import Icon from 'react-native-vector-icons/Feather';
import {Platform} from 'react-native';
import ThemeContext from '@react-navigation/native/lib/typescript/src/theming/ThemeContext';
import {useTheme} from '@react-navigation/native';

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

  stackHeaderCommonOptions: {
    headerBackTitleVisible: false,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTruncatedBackTitle: undefined,
    headerLeftContainerStyle: {
      left: Platform.OS === 'ios' ? 12 : 0,
    },
    headerBackImage: () => (
      <Icon name="arrow-left" size={30} color={useTheme().colors.text} />
    ),
  },
};

export type SettingsStackParamList = {
  Settings: undefined;
  Profile: {userId: string};
};

export default function SettingsStackScreen() {
  return <SimpleStackNavigator<SettingsStackParamList> config={config} />;
}

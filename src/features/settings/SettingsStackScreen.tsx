import React from 'react';
import Settings from './Settings';
import Profile from './Profile';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

export type SettingsStackParamList = {
  Settings: undefined;
  Profile: {userId: string};
};

export default function SettingsStackScreen() {
  const SettingsStack = createStackNavigator<SettingsStackParamList>();

  // iOS 스타일이 좋다!!
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS,
  };

  return (
    <SettingsStack.Navigator
      screenOptions={TransitionScreenOptions}
      initialRouteName="Settings">
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="Profile" component={Profile} />
    </SettingsStack.Navigator>
  );
}

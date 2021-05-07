import React from 'react';
import {Button, Text, View} from 'react-native';
import {SettingsStackParamList} from './SettingsStackScreen';
import {RouteProp, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import palette from '../../res/palette';
import {currentTheme} from '../../res/theme';

type Props = {
  route: RouteProp<SettingsStackParamList, 'Profile'>;
  navigation: StackNavigationProp<SettingsStackParamList, 'Profile'>;
};

export default function ProfileScreen({route, navigation}: Props) {
  const {userId} = route.params;

  return (
    <View style={palette.centeringContainer}>
      <Text
        style={{
          ...currentTheme().text,
          margin: 42,
        }}>{`Hello, its ${userId}!`}</Text>
      <Button title="OK" onPress={() => navigation.goBack()} />
    </View>
  );
}

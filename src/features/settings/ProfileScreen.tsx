import React from 'react';
import {Button, Text, View} from 'react-native';
import {SettingsStackParamList} from './SettingsStackScreen';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import palette from '../../res/palette';

type Props = {
  route: RouteProp<SettingsStackParamList, 'Profile'>;
  navigation: StackNavigationProp<SettingsStackParamList, 'Profile'>;
};

export default function ProfileScreen({route, navigation}: Props) {
  const {userId} = route.params;

  return (
    <View style={palette.centeringContainer}>
      <Text>{`My id is ${userId}!`}</Text>
      <Button title="OK" onPress={() => navigation.goBack()} />
    </View>
  );
}

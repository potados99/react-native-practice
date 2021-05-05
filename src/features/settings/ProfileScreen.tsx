import React from 'react';
import {Button, Text, View} from 'react-native';
import {SettingsStackParamList} from './SettingsStackScreen';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  route: RouteProp<SettingsStackParamList, 'Profile'>;
  navigation: StackNavigationProp<SettingsStackParamList, 'Profile'>;
};

export default function ProfileScreen({route, navigation}: Props) {
  const {userId} = route.params;

  return (
    <View>
      <Text>{`My id is ${userId}!`}</Text>
      <Button title="OK" onPress={() => navigation.goBack()} />
    </View>
  );
}

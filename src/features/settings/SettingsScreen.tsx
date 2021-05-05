import React from 'react';
import {Button, Text, View} from 'react-native';

import {SettingsStackParamList} from './SettingsStackScreen';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<SettingsStackParamList, 'Settings'>;
};

export default function SettingsScreen({navigation}: Props) {
  return (
    <View>
      <Text>Hi!!!</Text>
      <Button
        title="Click me!"
        onPress={() =>
          navigation.navigate('Profile', {
            userId: 'haha',
          })
        }
      />
    </View>
  );
}

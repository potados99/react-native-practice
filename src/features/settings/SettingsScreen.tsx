import React from 'react';
import {Button, Text, View} from 'react-native';

import {SettingsStackParamList} from './SettingsStackScreen';
import {StackNavigationProp} from '@react-navigation/stack';
import palette from '../../res/palette';

type Props = {
  navigation: StackNavigationProp<SettingsStackParamList, 'Settings'>;
};

export default function SettingsScreen({navigation}: Props) {
  return (
    <View style={palette.centeringContainer}>
      <Text>Hi!!!</Text>
      <View style={palette.bottomFullWidth}>
        <Button
          title="Click me!"
          onPress={() =>
            navigation.navigate('Profile', {
              userId: 'haha',
            })
          }
        />
      </View>
    </View>
  );
}

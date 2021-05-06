import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {SettingsStackParamList} from './SettingsStackScreen';
import {StackNavigationProp} from '@react-navigation/stack';
import palette from '../../res/palette';
import {Theme, useTheme} from '@react-navigation/native';
import CardView from '../../components/CardView';

type SettingFeature = {
  key: string;
  title: string;
  params: any;
  destination: keyof SettingsStackParamList;
};

const listItems: SettingFeature[] = [
  {
    key: 'profile_potados',
    title: 'Profile of Potados',
    params: {userId: 'Potados'},
    destination: 'Profile',
  },
  {
    key: 'profile_john',
    title: 'Profile of John',
    params: {userId: 'John'},
    destination: 'Profile',
  },
];

type Props = {
  navigation: StackNavigationProp<SettingsStackParamList, 'Settings'>;
};

export default function SettingsScreen({navigation}: Props) {
  return (
    <View style={palette.centeringContainer}>
      <FlatList
        style={{width: '100%'}}
        data={listItems}
        renderItem={item => (
          <ListItem item={item.item} navigation={navigation} />
        )}
      />
    </View>
  );
}

interface ListItemProps extends Props {
  item: SettingFeature;
}

function ListItem({item, navigation}: ListItemProps) {
  return (
    <CardView
      onPress={() => navigation.navigate(item.destination, item.params)}>
      <Text style={themedStyle(useTheme())}>{item.title}</Text>
    </CardView>
  );
}

const themedStyle = (theme: Theme) => ({
  padding: 10,
  fontSize: 18,
  height: 44,
  color: theme.colors.text,
});

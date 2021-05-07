import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import {SettingsStackParamList} from './SettingsStackScreen';
import {StackNavigationProp} from '@react-navigation/stack';
import CardView from '../../components/CardView';
import {currentTheme} from '../../res/theme';

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
    <View>
      <FlatList
        contentContainerStyle={{height: '100%' /*prevent last item clipping*/}}
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
    <View>
      <Text
        style={{
          ...currentTheme().text,
          marginHorizontal: 12,
          marginTop: 16,
          marginBottom: 8,
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        {item.params.userId}
      </Text>
      <CardView
        style={{
          marginHorizontal: 12,
        }}
        onPress={() => navigation.navigate(item.destination, item.params)}>
        <Text
          style={{
            ...currentTheme().text,
            fontSize: 18,
          }}>
          {item.title}
        </Text>
      </CardView>
    </View>
  );
}

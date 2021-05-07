import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {GithubProfileParamList} from './GithubProfileScreen';
import {FlatList, Text, View} from 'react-native';
import CardView from '../../components/CardView';

type GithubProfileListItem = {
  key: string;
  title: string;
  userId: string;
  destination: keyof GithubProfileParamList;
};

type Props = {
  navigation: StackNavigationProp<GithubProfileParamList, 'List'>;
};

export default class ListScreen extends React.Component<Props> {
  render() {
    const exampleListItems: GithubProfileListItem[] = [
      {
        key: 'potados99',
        title: 'Potados',
        userId: 'potados99',
        destination: 'Detail',
      },
      {
        key: 'hambp',
        title: 'HamBP',
        userId: 'hambp',
        destination: 'Detail',
      },
    ];

    return (
      <View>
        <FlatList
          contentContainerStyle={{
            height: '100%' /*prevent last item clipping*/,
          }}
          data={exampleListItems}
          renderItem={item => <ListItem {...this.props} item={item.item} />}
        />
      </View>
    );
  }
}

class ListItem extends React.Component<Props & {item: GithubProfileListItem}> {
  render() {
    const {item, navigation} = this.props;

    return (
      <View>
        <Text
          style={{
            marginHorizontal: 12,
            marginTop: 16,
            marginBottom: 8,
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>
        <CardView
          style={{
            marginHorizontal: 12,
          }}
          onPress={() =>
            navigation.navigate(item.destination, {userId: item.userId})
          }>
          <Text
            style={{
              fontSize: 18,
            }}>
            {`Profile of ${item.userId}`}
          </Text>
        </CardView>
      </View>
    );
  }
}

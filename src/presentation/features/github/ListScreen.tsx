import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {GithubProfileParamList} from './GithubProfileScreen';
import {FlatList, Text, View, ViewProps} from 'react-native';
import CardView from '../../components/CardView';
import Carousel from '../../components/Carousel';

type GithubProfileSectionItem = {
  key: string;
  title: string;
  profiles: GithubProfileItem[];
};

type GithubProfileItem = {
  key: string;
  userId: string;
};

interface Props extends ViewProps {
  navigation: StackNavigationProp<GithubProfileParamList, 'List'>;
}

export default class ListScreen extends React.Component<Props> {
  render() {
    const exampleListItems: GithubProfileSectionItem[] = [
      {
        key: 'favorite',
        title: 'Favorites',
        profiles: [
          {
            key: 'potados99',
            userId: 'potados99',
          },
          {
            key: 'gheejeon',
            userId: 'GHeeJeon',
          },
          {
            key: 'hambp',
            userId: 'hambp',
          },
          {
            key: 'bbaktaeho',
            userId: 'bbaktaeho',
          },
        ],
      },
      {
        key: 'visited',
        title: 'Visited',
        profiles: [
          {
            key: 'ryuspace',
            userId: 'ryuspace',
          },
        ],
      },
    ];

    return (
      <View>
        <FlatList
          contentContainerStyle={{
            height: '100%' /*prevent last item clipping*/,
          }}
          data={exampleListItems}
          renderItem={item => (
            <SectionItem {...this.props} section={item.item} />
          )}
        />
      </View>
    );
  }
}

/**
 * Section has title and horizontal list of its children
 */
class SectionItem extends React.Component<
  Props & {section: GithubProfileSectionItem}
> {
  render() {
    const {navigation} = this.props;
    const {profiles} = this.props.section;

    return (
      <View>
        <Text
          style={{
            marginHorizontal: 12,
            marginTop: 16,
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          {this.props.section.title}
        </Text>

        <Carousel
          style={{overflow: 'visible'}}
          contentContainerStyle={{paddingVertical: 12}} // escape shadow
          gap={12}
          itemWidth={'88%'}
          data={profiles}
          renderItem={i => (
            <ProfileItem
              key={i.index}
              navigation={navigation}
              profile={i.item}
            />
          )}
        />
      </View>
    );
  }
}

/**
 * The horizontally placed items in the sections.
 */
class ProfileItem extends React.Component<
  Props & {profile: GithubProfileItem}
> {
  render() {
    const {navigation, profile} = this.props;

    return (
      <CardView
        onPress={() => navigation.navigate('Detail', {userId: profile.userId})}>
        <Text style={{fontSize: 18}}>{`Profile of ${profile.userId}`}</Text>
      </CardView>
    );
  }
}

import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {GithubProfileParamList} from './GithubProfileScreen';
import {Dimensions, FlatList, Text, View, ViewProps} from 'react-native';
import CardView from '../../components/CardView';
import Carousel from '../../components/Carousel';
import Stat from '../../components/Carousel/Stat';

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
            key: 'hambp',
            userId: 'hambp',
          },
        ],
      },
      {
        key: 'visited',
        title: 'Visited',
        profiles: [
          {
            key: 'gheejeon',
            userId: 'GHeeJeon',
          },
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

    const screenWidth = Dimensions.get('window').width;

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
          {this.props.section.title}
        </Text>

        <Carousel
          itemsPerInterval={3}
          data={[
            {
              label: 'TODAY',
              value: 1,
            },
            {
              label: 'THIS WEEK',
              value: 39,
            },
            {
              label: 'THIS MONTH',
              value: 120,
            },
            {
              label: 'YESTERDAY',
              value: 3,
            },
            {
              label: 'LAST WEEK',
              value: 25,
            },
            {
              label: 'LAST MONTH',
              value: 175,
            },
          ]}
          renderItem={i => <Stat key={i.index} {...i.item} />}
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
        <Text
          style={{
            fontSize: 18,
          }}>
          {`Profile of ${profile.userId}`}
        </Text>
      </CardView>
    );
  }
}

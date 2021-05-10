import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import color from '../../res/color';
import Carousel from '../../components/Carousel';
import {divideArray} from '../../../common/utils/Array';
import CardView from '../../components/CardView';
import ItemSeparator from '../../components/ItemSeparator';
import Touchable from '../../components/Touchable';
import {ListPageParamList, ListScreenProps} from './ListScreen';
import {
  exampleListItems,
  GithubProfileItem,
  GithubProfileSectionItem,
} from './GitHubProfileData';

type Props = {
  // Stack navigation cannot be given to the ListPage directly
  // because its parent, TopTabNavigation, does not allow
  // a custom component creation logic (e.g. renderItem).
  // Therefore we need to wrap the stack navigation into a route param
  // of a TopTabNavigation.
  route: RouteProp<ListPageParamList, 'Today'>;
};

export default class ListPage extends React.Component<Props> {
  render() {
    const {navigation} = this.props.route.params;

    return (
      <FlatList
        style={{
          backgroundColor: color.white,
        }}
        data={exampleListItems}
        renderItem={item => (
          <SectionItem navigation={navigation} section={item.item} />
        )}
        keyExtractor={i => i.title}
        contentContainerStyle={styles.rootListContentContainer}
      />
    );
  }
}

/**
 * Section has title and horizontal list of its children
 */
class SectionItem extends React.Component<
  ListScreenProps & {section: GithubProfileSectionItem}
> {
  render() {
    const {navigation} = this.props;
    const {profiles} = this.props.section;

    return (
      <View>
        <Text style={styles.sectionHeaderText}>{this.props.section.title}</Text>

        <Carousel
          gap={12}
          data={divideArray(profiles, 3)}
          style={styles.sectionCarousel}
          itemWidth={'88%'}
          renderItem={i => (
            <ProfileStackCard navigation={navigation} profiles={i.item} />
          )}
          keyExtractor={i => i[0].userId}
          contentContainerStyle={styles.sectionCarouselContentContainer}
        />
      </View>
    );
  }
}

/**
 * Target of horizontal scrolling.
 */
class ProfileStackCard extends React.Component<
  ListScreenProps & {profiles: GithubProfileItem[]}
> {
  render() {
    const {navigation, profiles} = this.props;

    return (
      <CardView>
        <FlatList
          data={profiles}
          listKey={profiles[0].userId}
          renderItem={i => (
            <ProfileItem navigation={navigation} profile={i.item} />
          )}
          keyExtractor={i => i.userId}
          ItemSeparatorComponent={ItemSeparator}
        />
      </CardView>
    );
  }
}

/**
 * End items in the profile stack.
 */

class ProfileItem extends React.Component<
  ListScreenProps & {profile: GithubProfileItem},
  {lines: number}
> {
  state = {
    lines: 1,
  };

  render() {
    const {navigation, profile} = this.props;
    const {lines} = this.state;

    const navigate = () => {
      navigation.navigate('Detail', {userId: profile.userId});
    };

    const setMaxLines = (max: number) => {
      this.setState({
        lines: max,
      });
    };

    return (
      <Touchable onPress={() => setMaxLines(5)} onLongPress={() => navigate()}>
        <View style={styles.profileItemWrapper}>
          <Text
            numberOfLines={lines}
            ellipsizeMode={'tail'}
            style={{
              fontSize: 18,
            }}>
            {`Profile of ${profile.userId}! Perform a long click to see what's next! Maybe this text will be ellipsized due to its too much length ;)`}
          </Text>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  /*-------- Root list(vertical) --------*/
  rootListContentContainer: {
    height: '100%' /*prevent last item clipping*/,
  },

  /*-------- Section and stack list(horizontal) --------*/
  sectionHeaderText: {
    marginHorizontal: 24,
    marginTop: 12,
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionCarousel: {
    overflow: 'visible',
  },
  sectionCarouselContentContainer: {
    // For android: prevent elevation shadow clipping.
    paddingTop: 12,
    paddingBottom: 16,
  },

  /*-------- Profile Item  --------*/
  profileItemWrapper: {
    padding: 20,
  },
});

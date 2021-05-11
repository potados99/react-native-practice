import React from 'react';
import palette from '../../res/palette';
import SectionHeader from './SectionHeader';
import ProfileStackPager from './ProfileStackPager';
import {StackNavigationProp} from '@react-navigation/stack';
import {GithubProfileParamList} from './GithubScreen';
import {Animated, StyleSheet, View} from 'react-native';
import {exampleListItems, GithubProfileSectionItem} from './GitHubProfileData';

type Props = {
  navigation: StackNavigationProp<GithubProfileParamList, 'List'>;
};

type State = {
  scrollY: Animated.Value;
};

export default class ListPage extends React.Component<Props, State> {
  scrollY = new Animated.Value(0);

  componentDidMount() {
    const {navigation} = this.props;

    const headerY = Animated.multiply(
      Animated.diffClamp(this.scrollY, 0, 55),
      -1,
    );

    this.scrollY.addListener(v => {
      console.log(v);

      parentNavigation.setOptions({
        headerStyle: {
          transform: [{translateY: headerY}],
          shadowColor: 'transparent',
        },
      });

      navigation.setOptions({
        headerShown: false,
      });
    });

    const parentNavigation: Props['navigation'] = navigation.dangerouslyGetParent();
    if (!parentNavigation) {
      return;
    }
  }

  render() {
    const {navigation} = this.props;

    return (
      <Animated.FlatList
        style={palette.whiteBackground}
        data={exampleListItems}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: this.scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={item => (
          <SectionItem navigation={navigation} section={item.item} />
        )}
        keyExtractor={i => i.title}
        contentContainerStyle={styles.rootListContentContainer}
      />
    );
  }
}

class SectionItem extends React.Component<
  Props & {section: GithubProfileSectionItem}
> {
  render() {
    const {navigation, section} = this.props;

    return (
      <View>
        <SectionHeader
          title={section.title}
          onClickMore={() => navigation.navigate('Detail', {section})}
        />

        <ProfileStackPager profiles={section.profiles} stackSize={3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootListContentContainer: {
    paddingBottom: 25, // Padding at the bottom of the list.
  },
});

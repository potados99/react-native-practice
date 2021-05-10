import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {exampleListItems, GithubProfileSectionItem} from './GitHubProfileData';
import {StackNavigationProp} from '@react-navigation/stack';
import {GithubProfileParamList} from './GithubScreen';
import palette from '../../res/palette';
import SectionHeader from './SectionHeader';
import ProfileStackPager from './ProfileStackPager';

type Props = {
  navigation: StackNavigationProp<GithubProfileParamList, 'List'>;
};

export default class ListPage extends React.Component<Props> {
  render() {
    const {navigation} = this.props;

    return (
      <FlatList
        style={palette.whiteBackground}
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
    height: '100%' /*prevent last item clipping*/,
  },
});

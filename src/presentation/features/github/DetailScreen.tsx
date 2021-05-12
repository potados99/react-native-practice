import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, ScrollView, Text, View} from 'react-native';
import {GithubProfileParamList} from './GithubScreen';
import ProfileStackPager from './ProfileStackPager';
import palette from '../../res/palette';

type Props = {
  route: RouteProp<GithubProfileParamList, 'Detail'>;
  navigation: StackNavigationProp<GithubProfileParamList, 'Detail'>;
};

export default class DetailScreen extends React.Component<Props> {
  render() {
    const {route} = this.props;
    const {section} = route.params;

    return (
      <ScrollView
        style={palette.whiteBackground}
        contentContainerStyle={{paddingTop: 8}}>
        <ProfileStackPager profiles={section.profiles} />
      </ScrollView>
    );
  }

  componentDidMount() {
    const {route, navigation} = this.props;
    const {section} = route.params;

    navigation.setOptions({headerTitle: section.title});
  }
}

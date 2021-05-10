import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, ScrollView, Text, View} from 'react-native';
import {GithubProfileParamList} from './GithubScreen';
import ProfileStackPager from './ProfileStackPager';

type Props = {
  route: RouteProp<GithubProfileParamList, 'Detail'>;
  navigation: StackNavigationProp<GithubProfileParamList, 'Detail'>;
};

export default class DetailScreen extends React.Component<Props> {
  render() {
    const {route} = this.props;
    const {section} = route.params;

    return (
      <ScrollView>
        <ProfileStackPager profiles={section.profiles} />
      </ScrollView>
    );
  }

  componentDidMount() {
    const {route, navigation} = this.props;
    const {section} = route.params;

    navigation.setOptions({title: section.title});
  }
}

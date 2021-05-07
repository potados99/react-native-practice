import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import palette from '../../res/palette';
import {GithubProfileParamList} from './GithubProfileScreen';
import {inject, observer} from 'mobx-react';
import RootStore from '../../../store/RootStore';
import GithubProfileStore from './GithubProfileStore';

type Props = {
  route: RouteProp<GithubProfileParamList, 'Detail'>;
  navigation: StackNavigationProp<GithubProfileParamList, 'Detail'>;
  store: GithubProfileStore;
};

@inject(({githubProfileStore}: RootStore) => ({store: githubProfileStore}))
@observer
export default class DetailScreen extends React.Component<Props> {
  render() {
    const {route, navigation, store} = this.props;
    const {userId} = route.params;

    store.fetchUserInfo(userId);

    return (
      <View style={palette.centeringContainer}>
        <Text
          style={{
            margin: 42,
          }}>
          {store.currentUser?.bio}
        </Text>
        <Button title="OK" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

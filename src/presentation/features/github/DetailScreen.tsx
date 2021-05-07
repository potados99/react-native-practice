import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import palette from '../../res/palette';
import {GithubProfileParamList} from './GithubProfileScreen';

type Props = {
  route: RouteProp<GithubProfileParamList, 'Detail'>;
  navigation: StackNavigationProp<GithubProfileParamList, 'Detail'>;
};

export default class DetailScreen extends React.Component<Props> {
  render() {
    const {route, navigation} = this.props;
    const {userId} = route.params;

    return (
      <View style={palette.centeringContainer}>
        <Text
          style={{
            margin: 42,
          }}>{`Hello, its ${userId}!`}</Text>
        <Button title="OK" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

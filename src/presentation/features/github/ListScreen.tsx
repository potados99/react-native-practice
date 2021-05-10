import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {GithubProfileParamList} from './GithubProfileScreen';
import {ViewProps} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ListPage from './ListPage';

export type ListScreenProps = ViewProps & {
  navigation: StackNavigationProp<GithubProfileParamList, 'List'>;
};

export type ListPageParamList = {
  Today: ListScreenProps;
  Tomorrow: ListScreenProps;
};

export default class ListScreen extends React.Component<ListScreenProps> {
  render() {
    const Tab = createMaterialTopTabNavigator<ListPageParamList>();

    const initialStackNavigationParams = {
      navigation: this.props.navigation,
    };

    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Today"
          component={ListPage}
          initialParams={initialStackNavigationParams}
        />
        <Tab.Screen
          name="Tomorrow"
          component={ListPage}
          initialParams={initialStackNavigationParams}
        />
      </Tab.Navigator>
    );
  }
}

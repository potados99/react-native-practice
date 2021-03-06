import Icon from 'react-native-vector-icons/Feather';
import color from '../../res/color';
import React from 'react';
import palette from '../../res/palette';
import BackIcon from '../../components/BackIcon';
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';
import {StackHeaderOptions} from '@react-navigation/stack/lib/typescript/src/types';
import {Platform, StyleSheet} from 'react-native';
import {GithubProfileSectionItem} from './GitHubProfileData';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

export type GithubProfileParamList = {
  List: undefined;
  Detail: {section: GithubProfileSectionItem};
};

export default class GithubScreen extends React.Component {
  render() {
    const Stack = createStackNavigator<GithubProfileParamList>();

    const screenOptions: StackHeaderOptions = {
      headerBackTitleVisible: false,
      headerTitleStyle: styles.boldText,
      headerTintColor: color.textPrimary,
      headerLeftContainerStyle: {
        left: Platform.OS === 'ios' ? 12 : 0,
      },
      headerBackImage: () => <BackIcon />,
      ...TransitionPresets.SlideFromRightIOS,
    };

    return (
      <Stack.Navigator headerMode="screen" screenOptions={screenOptions}>
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{
            headerTitle: () => (
              <Icon name="code" size={27} color={color.textPrimary} />
            ),
            headerTitleAlign: 'center',
            headerStyle: styles.noSeparator,
          }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  noSeparator: {
    shadowColor: 'transparent',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

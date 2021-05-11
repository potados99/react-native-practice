import React from 'react';
import SimpleStackNavigator, {
  SimpleStackNavigatorConfig,
} from '../../components/SimpleStackNavigator';
import Icon from 'react-native-vector-icons/Feather';
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';
import color from '../../res/color';
import {GithubProfileSectionItem} from './GitHubProfileData';

const config: SimpleStackNavigatorConfig = {
  screens: [
    {
      name: 'List',
      component: ListScreen,
      options: {
        headerTitle: () => (
          <Icon name="code" size={27} color={color.textPrimary} />
        ),
        headerTitleAlign: 'center',
        headerStyle: {
          shadowColor: 'transparent', // Remove separator.
        },
      },
    },
    {
      name: 'Detail',
      component: DetailScreen,
    },
  ],
};

export type GithubProfileParamList = {
  List: undefined;
  Detail: {section: GithubProfileSectionItem};
};

export default class GithubScreen extends React.Component {
  render() {
    return <SimpleStackNavigator<GithubProfileParamList> config={config} />;
  }
}

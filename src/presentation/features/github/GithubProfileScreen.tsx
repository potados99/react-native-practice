import React from 'react';
import SimpleStackNavigator, {
  SimpleStackNavigatorConfig,
} from '../../components/SimpleStackNavigator';
import Icon from 'react-native-vector-icons/Feather';
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';
import color from '../../res/color';

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
      },
    },
    {
      name: 'Detail',
      component: DetailScreen,
      options: {
        headerTitle: '',
      },
    },
  ],
};

export type GithubProfileParamList = {
  List: undefined;
  Detail: {userId: string};
};

export default class GithubProfileScreen extends React.Component {
  render() {
    return <SimpleStackNavigator<GithubProfileParamList> config={config} />;
  }
}

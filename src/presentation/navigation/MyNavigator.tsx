import React from 'react';
import HomeScreen from '../features/home/HomeScreen';
import CounterScreen from '../features/counter/CounterScreen';
import SimpleTabNavigator, {
  SimpleTabNavigatorConfig,
} from '../components/SimpleTabNavigator';
import GithubScreen from '../features/github/GithubScreen';

const config: SimpleTabNavigatorConfig = {
  tabs: [
    {
      name: 'Home',
      iconName: focused => (focused ? 'home' : 'home-outline'),
      component: HomeScreen,
    },
    {
      name: 'Counter',
      iconName: focused => (focused ? 'paw' : 'paw-outline'),
      component: CounterScreen,
    },
    {
      name: 'GitHub',
      iconName: focused => (focused ? 'code' : 'code-outline'),
      component: GithubScreen,
    },
  ],

  bottomTabBarOptions: {
    activeTintColor: '#0088FF',
    inactiveTintColor: 'grey',
  },
};

export default function MyNavigator() {
  return <SimpleTabNavigator config={config} />;
}

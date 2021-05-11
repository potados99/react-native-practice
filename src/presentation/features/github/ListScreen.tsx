import React from 'react';
import ListPage from './ListPage';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export default class ListScreen extends React.Component {
  render() {
    const Tab = createMaterialTopTabNavigator();

    return (
      <Tab.Navigator swipeEnabled={false} tabBarOptions={}>
        <Tab.Screen name="Today" component={ListPage} />
        <Tab.Screen name="Tomorrow" component={ListPage} />
      </Tab.Navigator>
    );
  }
}

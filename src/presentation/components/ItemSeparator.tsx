import React from 'react';
import {Platform, View} from 'react-native';
import color from '../res/color';

export default class ItemSeparator extends React.Component {
  render() {
    return (
      <View
        style={{
          height: Platform.OS === 'android' ? 0.5 : 0.4,
          width: '100%',
          backgroundColor: color.dividerColorLight,
        }}
      />
    );
  }
}

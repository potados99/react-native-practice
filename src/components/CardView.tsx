import {
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Theme, useTheme} from '@react-navigation/native';
import color from '../res/color';

interface Props extends TouchableWithoutFeedbackProps {
  style?: ViewStyle;
  children?: React.ReactNode;
}

export default function CardView({style, children, onPress}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={e => onPress?.call(undefined, e)}>
      <View style={{...style, ...themedStyle(useTheme())}}>{children}</View>
    </TouchableOpacity>
  );
}

const themedStyle = (theme: Theme) => ({
  shadowOffset: {width: 0, height: 2},
  shadowRadius: 6,
  shadowOpacity: 0.26,
  elevation: 8,
  padding: 10,
  margin: 10,
  borderRadius: 10,
  shadowColor: theme.dark ? color.transparent : color.shadowColor,
  backgroundColor: theme.dark ? color.darkComponentBackground : color.white,
});

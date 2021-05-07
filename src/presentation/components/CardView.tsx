import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import color from '../res/color';

interface Props extends TouchableWithoutFeedbackProps {
  style?: ViewStyle;
  children?: React.ReactNode;
}

export default class CardView extends React.Component<Props> {
  render() {
    const {style, children, onPress} = this.props;

    const card = (
      <View
        style={{
          ...styles.card,
          ...style,
        }}>
        {children}
      </View>
    );

    const cardWithAndroidFeedback = (
      <TouchableNativeFeedback
        onPress={e => onPress?.call(undefined, e)}
        background={TouchableNativeFeedback.Ripple(
          color.rippleColorLight,
          false,
        )}
        useForeground={true}>
        {card}
      </TouchableNativeFeedback>
    );

    const cardWithIosFeedback = (
      <TouchableOpacity
        onPress={e => onPress?.call(undefined, e)}
        activeOpacity={0.5}>
        {card}
      </TouchableOpacity>
    );

    if (Platform.OS === 'android') {
      return cardWithAndroidFeedback;
    } else {
      return cardWithIosFeedback;
    }
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    shadowColor: color.shadowColor,
    backgroundColor: color.white,

    // iOS
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 18,
    shadowOpacity: 0.2,
    borderRadius: 12,

    // Android
    elevation: 8,
  },
});

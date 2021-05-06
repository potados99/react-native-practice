import {
  Platform,
  TouchableNativeFeedback,
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
  const card = (
    <View
      // @ts-ignore
      style={{
        ...derivedStyle(useTheme(), Platform.OS).card,
        ...style,
      }}>
      {children}
    </View>
  );

  /**
   * 안드로이드에서 뷰에 그림자를 띄우려면 elevation을 이용하는 수 밖에 없습니다.
   * 그런데 elevation과 TouchableOpacity를 사용하면 그림자가 아주 이상해집니다.
   *
   * 어쩔 수 없이 TouchableNativeFeedback을 사용합니다. 더 자연스럽기도 하구요.
   * 그런데 이 친구는 iOS에서 못 씁니다. 결국 두 OS를 지원하기 위해 코드를 분기했습니다.
   */

  if (Platform.OS === 'android') {
    const rippleColor = useTheme().dark
      ? color.rippleColorDark
      : color.rippleColorLight;

    return (
      // 안드로이드의 네이티브 ripple 효과를 사용합니다.
      <TouchableNativeFeedback
        onPress={e => onPress?.call(undefined, e)}
        background={TouchableNativeFeedback.Ripple(rippleColor, false)}
        useForeground={true}>
        {card}
      </TouchableNativeFeedback>
    );
  } else {
    return (
      // React Native가 제공하는 투명도 효과를 사용합니다.
      <TouchableOpacity
        onPress={e => onPress?.call(undefined, e)}
        activeOpacity={0.5}>
        {card}
      </TouchableOpacity>
    );
  }
}

const derivedStyle = (theme: Theme, platform: string) => ({
  card: {
    shadowColor: theme.dark ? color.transparent : color.shadowColor,
    backgroundColor: theme.dark ? color.darkComponentBackground : color.white,
    padding: 18,
    overflow: platform === 'android' ? 'hidden' : 'visible',

    // iOS
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 18,
    shadowOpacity: 0.2,
    borderRadius: 12,

    // Android
    elevation: 8,
  },
});

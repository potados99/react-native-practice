import {Animated} from 'react-native';

const v = new Animated.Value(0);

export default {
  scrollY: v,
  headerY: Animated.multiply(Animated.diffClamp(v, 0, 55), -1),
};

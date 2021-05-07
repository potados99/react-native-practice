import {StyleSheet} from 'react-native';
import color from './color';

const palette = StyleSheet.create({
  centeringContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomFullWidth: {
    position: 'absolute',
    bottom: 6,
    start: 6,
    end: 6,
  },

  textPrimary: {
    color: color.textPrimary,
    fontSize: 16,
  },
  textSecondary: {
    color: color.textSecondary,
    fontSize: 14,
  },
  textTertiary: {
    color: color.textTertiary,
    fontSize: 12,
  },
});

export default palette;

import {useTheme} from '@react-navigation/native';

/**
 * Basic 'theme-specific' things that are frequently used.
 */
export const currentTheme = () => ({
  text: {
    color: useTheme().colors.text,
  },
});

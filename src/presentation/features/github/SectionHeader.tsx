import React from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import color from '../../res/color';

type Props = ViewProps & {
  title?: string;
  onClickMore?: () => void;
};

export default class SectionHeader extends React.Component<Props> {
  render() {
    const {title, onClickMore, style} = this.props;

    return (
      <View style={[styles.container, style]}>
        <Text style={styles.headerText}>{title}</Text>
        <Icon
          onPress={onClickMore}
          style={styles.moreIcon}
          name="arrow-right"
          size={24}
          color={color.textPrimary}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 12,
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  moreIcon: {
    // Ensure more touchable area.
    paddingTop: 12,
    paddingBottom: 6,
    paddingStart: 55,
  },
});

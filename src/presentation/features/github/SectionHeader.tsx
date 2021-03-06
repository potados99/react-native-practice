import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
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
      <TouchableOpacity onPress={onClickMore}>
        <View style={[styles.container, style]}>
          <Text style={styles.headerText}>{title}</Text>
          <Icon name="arrow-right" size={25} color={color.textPrimary} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 16,
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

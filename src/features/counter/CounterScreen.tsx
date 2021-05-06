import React from 'react';
import palette from '../../res/palette';
import {CounterState} from './CounterReducer';
import {connect, ConnectedProps} from 'react-redux';
import {setAction, decrementAction, incrementAction} from './CounterActions';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

const connector = connect((state: CounterState) => state);

interface Props extends ConnectedProps<typeof connector> {}

function CounterScreen({counter, dispatch}: Props) {
  const theme = useTheme();

  const themedColor = {
    color: theme.colors.text,
    borderColor: theme.colors.text,
  };

  return (
    <View style={palette.centeringContainer}>
      <Text style={themedColor}>Counter: {counter.amount}</Text>

      <TextInput
        onSubmitEditing={event =>
          dispatch(setAction(Number.parseInt(event.nativeEvent.text)))
        }
        style={themedColor}
        keyboardType="numeric"
        returnKeyType="done"
        placeholder="change amount"
      />

      <View style={styles.floatingView}>
        <TouchableOpacity
          style={{
            ...styles.floatingButton,
            ...themedColor,
          }}
          onPress={() => dispatch(incrementAction())}>
          <Text style={themedColor}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.floatingButton,
            ...themedColor,
          }}
          onPress={() => dispatch(decrementAction())}>
          <Text style={themedColor}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingView: {
    position: 'absolute', // 얘만 따로 취급!
    bottom: 10,
    right: 10,
  },
  floatingButton: {
    flexDirection: 'column', // top to bottom
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center', // main axis: align vertical
    alignItems: 'center', // cross axis: align horizontal
    aspectRatio: 1,
    width: 55,
    borderRadius: 50,
    margin: 6,
  },
});

export default connector(CounterScreen);

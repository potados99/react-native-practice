import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import palette from '../../res/palette';

export default function CounterScreen() {
  return (
    <View style={palette.centeringContainer}>
      <Text>Counter: 0</Text>
      <TextInput keyboardType="numeric" placeholder="change amount" />

      <View style={styles.floatingView}>
        <TouchableOpacity style={styles.floatingButton}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.floatingButton}>
          <Text>-</Text>
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
    borderColor: 'black',
    justifyContent: 'center', // main axis: align vertical
    alignItems: 'center', // cross axis: align horizontal
    aspectRatio: 1,
    width: 55,
    borderRadius: 50,
    margin: 6,
  },
});

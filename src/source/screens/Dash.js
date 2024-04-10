import React from 'react';
import {View, StyleSheet} from 'react-native';

const Dash = ({colors}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.dash, {backgroundColor: colors[0]}]} />
      <View style={[styles.dash, {backgroundColor: colors[1]}]} />
      <View style={[styles.dash, {backgroundColor: colors[2]}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 70,
  },
  dash: {
    width: 20,
    height: 2,
  },
});

export default Dash;

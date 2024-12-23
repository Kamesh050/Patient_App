import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}: any) => (
  <View style={styles.container}>
    <Button
      title="Audio Player"
      onPress={() => navigation.navigate('AudioPlayer')}
    />
    <Button
      title="Video Player"
      onPress={() => navigation.navigate('VideoPlayer')}
    />
    <Button title="Call Screen" onPress={() => navigation.navigate('Call')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

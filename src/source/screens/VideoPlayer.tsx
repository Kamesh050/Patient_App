import React from 'react';
import {StyleSheet, View} from 'react-native';
import Video from 'react-native-video';

const VideoPlayerScreen = () => (
  <View style={styles.container}>
    <Video
      source={{uri: 'video_file.mp4'}}
      style={styles.video}
      controls
      resizeMode="contain"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default VideoPlayerScreen;

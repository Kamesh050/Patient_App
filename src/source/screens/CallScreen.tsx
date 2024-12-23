import React, {useRef} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {MediaStream, RTCView, mediaDevices} from 'react-native-webrtc';

const CallScreen = () => {
  const localStream = useRef<MediaStream | null>(null);

  const startCall = async () => {
    try {
      const stream = await mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      localStream.current = stream;
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };

  return (
    <View style={styles.container}>
      <RTCView
        streamURL={localStream.current ? localStream.current.toURL() : ''}
        style={styles.video}
      />
      <Button title="Start Call" onPress={startCall} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '50%',
  },
});

export default CallScreen;

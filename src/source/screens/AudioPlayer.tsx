import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Sound from 'react-native-sound';

const AudioPlayerScreen = () => {
  const [sound, setSound] = useState<Sound | null>(null);

  const playAudio = () => {
    const newSound = new Sound('audio_file.mp3', Sound.MAIN_BUNDLE, error => {
      if (!error) newSound.play();
    });
    setSound(newSound);
  };

  const stopAudio = () => {
    sound?.stop(() => setSound(null));
  };

  return (
    <View style={styles.container}>
      <Button title="Play Audio" onPress={playAudio} />
      <Button title="Stop Audio" onPress={stopAudio} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AudioPlayerScreen;

import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Walkthrough1');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../images/Splash.png')} style={styles.image} />
      </View>
      <Text style={styles.splashText}>Health Desk</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2587',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  splashText: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'left',
    color: 'white',
    marginTop: 20,
  },
});

export default SplashScreen;

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default Booking = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={require('../images/Booking.png')} />
        <Text style={styles.title}>Booking Successful</Text>
        <Text style={styles.message}>
          Appointment has been successfully scheduled. After receiving
          confirmation, please proceed to complete the payment process.
        </Text>
        <View style={styles.Image}>
          <Image source={require('../images/DownEllipse.png')} />
        </View>
        <View style={styles.Image2}>
          <Image source={require('../images/Ellipse10.png')} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#1F2587',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  message: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  Image: {
    alignSelf: 'flex-start',
    right: 20,
    top: hp(33),
  },
  Image2: {
    alignSelf: 'flex-start',
    right: 24,
    top: hp(9),
  },
});

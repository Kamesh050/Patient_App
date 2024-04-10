import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

export default Appointment = () => {
  const navigation = useNavigation();
  const onNextPress = () => {
    navigation.navigate('BookAppoinment');
  };
  return (
    <>
      <TouchableOpacity style={styles.Online} onPress={onNextPress}>
        <Image
          source={require('../images/Appointment.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.Text}> Online Consultation </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Online} onPress={onNextPress}>
        <Image
          source={require('../images/offlineappoinment.png')}
          style={[styles.profilePicture, styles.secondImage]}
        />
        <Text style={styles.Text}> Offline Consultation </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  profilePicture: {
    resizeMode: 'contain',
  },
  secondImage: {
    width: 80,
    height: 50,
  },
  Online: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,

    marginHorizontal: 20,
    padding: 25,
    marginTop: hp(8),
    borderRadius: 8,
    borderColor: 'lightgrey',
    top: hp(4),
  },
  Text: {
    color: '#1F2587',
    fontSize: 18,
    fontWeight: '600',
  },
});

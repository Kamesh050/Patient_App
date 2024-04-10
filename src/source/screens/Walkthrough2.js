import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Dash from './Dash';

const Walkthrough2 = ({navigation}) => {
  const [dashColors, setDashColors] = useState([
    '#1F2587',
    '#1F2587',
    '#D9D9D9',
  ]);
  const onNextPress = () => {
    navigation.navigate('Walkthrough3');
  };
  const onSkipPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSkipPress}>
        <Text style={styles.skipbtn}>Skip</Text>
      </TouchableOpacity>
      <Image
        source={require('../images/EllipseTop.png')}
        style={styles.EllipseTop}
      />
      <Image
        source={require('../images/Walkthrough2.png')}
        style={styles.image}
      />
      <Text style={styles.heading}>Never Miss a Dose</Text>
      <Text style={styles.subheading}>
        Set up personalized medicine reminders to ensure you never miss a dose.
        Stay on top of your treatment plan with timely notifications.
      </Text>
      <View style={styles.dashContainer}>
        <Dash colors={dashColors} />
      </View>
      <TouchableOpacity style={styles.arrowContainer} onPress={onNextPress}>
        <Image source={require('../images/Arrow.png')} style={styles.arrow} />
      </TouchableOpacity>
      <Image
        source={require('../images/EllipseBottom.png')}
        style={styles.EllipseBottom}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  EllipseBottom: {
    alignSelf: 'flex-end',
    top: hp(2),
    marginStart: 10,
  },
  EllipseTop: {
    alignSelf: 'flex-start',
    bottom: hp(3.2),
  },
  heading: {
    fontWeight: '700',
    fontSize: 18,
    color: '#1F2587',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    marginTop: hp(5),
  },
  subheading: {
    fontWeight: '500',
    fontSize: 12,
    textAlign: 'center',
    width: '75%',
    fontFamily: 'Montserrat',
    marginTop: hp(2),
    color: '#333333',
    lineHeight: 14,
  },
  dashContainer: {
    marginTop: 20,
  },
  skipbtn: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Montserrat',
    left: hp(19),
    top: hp(7),
    color: '#00539C',
  },
  arrowContainer: {
    position: 'absolute',
    bottom: hp(5),
    alignSelf: 'center',
    zIndex: 1,
    right: 30,
  },
  arrow: {
    width: 50,
    height: 50,
  },
});

export default Walkthrough2;

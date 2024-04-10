import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Dash from './Dash';

const Walkthrough1 = ({navigation}) => {
  const [dashColors, setDashColors] = useState([
    '#1F2587',
    '#D9D9D9',
    '#D9D9D9',
  ]);
  const onNextPress = () => {
    navigation.navigate('Walkthrough2');
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
        source={require('../images/Walkthrough1.png')}
        style={styles.image}
      />
      <Text style={styles.heading}>Schedule Doctor Appointments</Text>
      <Text style={styles.subheading}>
        Book appointments with your preferred doctors hassle-free. Choose from a
        list of experienced healthcare professionals.
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
    top: hp(5.2),
    marginStart: 10,
  },
  EllipseTop: {
    alignSelf: 'flex-start',
    bottom: hp(7.2),
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
    width: '89%',
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
    top: hp(4),
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

export default Walkthrough1;

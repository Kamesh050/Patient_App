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

const Walkthrough3 = ({navigation}) => {
  const [dashColors, setDashColors] = useState([
    '#1F2587',
    '#1F2587',
    '#1F2587',
  ]);
  const onNextPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/EllipseTop.png')}
        style={styles.EllipseTop}
      />
      <Image
        source={require('../images/Walkthrough3.png')}
        style={styles.image}
      />
      <Text style={styles.heading}>Smart Health Checkup</Text>
      <Text style={styles.subheading}>
        Experience the future of healthcare with our smart checkup feature. Get
        instant health insights and personalized recommendations
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
    top: hp(5),
    marginStart: 10,
  },
  EllipseTop: {
    alignSelf: 'flex-start',
    bottom: hp(5),
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
    width: '85%',
    fontFamily: 'Montserrat',
    marginTop: hp(2),
    color: '#333333',
    lineHeight: 14,
  },
  dashContainer: {
    marginTop: 20,
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

export default Walkthrough3;

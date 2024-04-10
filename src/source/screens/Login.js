import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Formik} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginSchema = yup.object().shape({
  corporateName: yup.string().required('Corporate Name is required'),
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async values => {
    try {
      await AsyncStorage.setItem('username', values.username);
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
    navigation.navigate('Home', {username: values.username});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}} behavior="padding">
        <View>
          <Image
            source={require('../images/Splash.png')}
            style={styles.image}
          />
          <Text style={styles.Header}>Health Desk</Text>
          <View>
            <Text style={styles.SubHeader}>Corporate Login</Text>
          </View>
          <View>
            <Text style={styles.welcomeback}>Hi, Welcome Back!</Text>
          </View>
          <Formik
            initialValues={{corporateName: '', username: '', password: ''}}
            onSubmit={handleLogin}
            validationSchema={LoginSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <Text style={styles.titlename}>Corporate Name</Text>
                <View style={styles.inputContainer}>
                  <Image
                    source={require('../images/Usericon.png')}
                    style={styles.icon}
                  />
                  <View style={styles.inputLeftBackground} />
                  <TextInput
                    onChangeText={handleChange('corporateName')}
                    onBlur={handleBlur('corporateName')}
                    value={values.corporateName}
                    placeholder="Corporate Name"
                    style={styles.input}
                  />
                </View>
                {touched.corporateName && errors.corporateName && (
                  <Text style={styles.errorText}>{errors.corporateName}</Text>
                )}

                <View style={styles.text}>
                  <Text>Type 3 characters to search for Corporate</Text>
                </View>

                <Text style={styles.titlename}>Username</Text>
                <View style={styles.inputContainer}>
                  <Image
                    source={require('../images/Usericon.png')}
                    style={styles.icon}
                  />
                  <View style={styles.inputLeftBackground} />
                  <TextInput
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    placeholder="Enter Full Name"
                    style={styles.input}
                  />
                </View>
                {touched.username && errors.username && (
                  <Text style={styles.errorText}>{errors.username}</Text>
                )}

                <Text style={styles.titlename}>Password</Text>
                <View style={styles.inputContainer}>
                  <Image
                    source={require('../images/password.png')}
                    style={styles.icon}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}>
                    <Image
                      source={require('../images/Eye.png')}
                      style={styles.iconRight}
                    />
                  </TouchableOpacity>
                  <View style={styles.inputLeftBackground} />
                  <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={!showPassword}
                    placeholder="Password"
                    style={styles.inputt}
                  />
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                <TouchableOpacity
                  style={styles.Loginbutton}
                  onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    alignContent: 'center',
  },
  image: {
    width: wp(30),
    height: hp(30),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  Header: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Montserrat',
    color: '#1F2587',
    bottom: hp(5),
    textAlign: 'center',
  },
  SubHeader: {
    fontFamily: 'Montserrat',
    color: '#333333',
    bottom: hp(3),
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  welcomeback: {
    fontFamily: 'Montserrat',
    color: '#1F2587',
    bottom: hp(3),
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 5,
    marginBottom: hp(3),
    paddingHorizontal: wp(3),
  },
  icon: {
    marginRight: wp(2),
    zIndex: 1,
  },
  input: {
    width: wp(70),
    height: hp(5),
    left: 10,
  },
  inputLeftBackground: {
    position: 'absolute',
    left: 1,
    width: 35,
    height: '95%',
    backgroundColor: '#EFEFEF',
  },
  text: {
    color: ' #666666',
    fontWeight: '500',
    fontFamily: 'Montserrat',
    bottom: 20,
  },
  titlename: {
    color: '#000000',
    bottom: 5,
  },
  iconRight: {
    left: wp(65),
  },
  inputt: {
    right: 10,
  },
  Loginbutton: {
    paddingTop: hp(2),
    borderRadius: 22,
    backgroundColor: '#1F2587',
    marginTop: hp(8),
    padding: 10,
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    bottom: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: hp(1),
    marginLeft: wp(3),
    bottom: 15,
  },
});

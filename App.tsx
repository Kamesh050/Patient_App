import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/source/screens/SplashScreen';
import Walkthrough1 from './src/source/screens/Walkthrough1';
import Walkthrough2 from './src/source/screens/Walkthrough2';
import Walkthrough3 from './src/source/screens/Walkthrough3';
import Login from './src/source/screens/Login';
import Home from './src/source/screens/Home';
import Appointment from './src/source/screens/Appointment';
import BookAppoinment from './src/source/screens/BookAppoinment';
import Booking from './src/source/screens/Booking';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Walkthrough1"
          component={Walkthrough1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Walkthrough2"
          component={Walkthrough2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Walkthrough3"
          component={Walkthrough3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Appointment"
          component={Appointment}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="BookAppoinment"
          component={BookAppoinment}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

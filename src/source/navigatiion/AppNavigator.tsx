import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home';
import AudioPlayer from '../screens/AudioPlayer';
import VideoPlayer from '../screens/VideoPlayer';
import CallScreen from '../screens/CallScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AudioPlayer" component={AudioPlayer} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
      <Stack.Screen name="Call" component={CallScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;

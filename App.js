import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/Reducer';
const store = createStore(reducer);
import VideoMenuScreen from './screens/VideoMenuScreen';
import ApplicationScreen from './screens/ApplicationScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="VideoMenu" component={VideoMenuScreen} />
          <Stack.Screen name="Application" component={ApplicationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

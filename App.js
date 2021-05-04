//import liraries
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

//Import screens 
import store from "Redux/Store"
import RootStack from './Src/Navigation/RootStack';
const Stack = createStackNavigator();

const App = () => {

  return (
    // <Provider store={store}>
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
    // </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});
export default App;


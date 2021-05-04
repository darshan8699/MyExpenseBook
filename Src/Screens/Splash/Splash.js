//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView,StatusBar} from 'react-native';

// create a component
const Splash = () => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"#2c3e50"}/>
      <View style={styles.container}>
        <Text>MyComponent</Text>
      </View>
    </SafeAreaView>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});
//make this component available to the app
export default Splash;

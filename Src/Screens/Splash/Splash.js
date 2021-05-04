//import liraries
import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = ({navigation}) => {
  useEffect(() => {
   setTimeout(async () => {
     navigation.replace("Swiper")
  }, 3000);
  },[])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#2c3e50'} />
      <View style={styles.container}>
        <Text>MyComponent</Text>
      </View>
    </SafeAreaView>
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
export default Splash;

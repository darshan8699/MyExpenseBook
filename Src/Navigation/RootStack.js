import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from "Screens/Splash/Splash";
import Swiper from "Screens/Swiper/Swiper";
import Dashboard from "Screens/Dashboard/Dashboard";

const Stack = createStackNavigator();

const RootStack= () => {
  return (
    <Stack.Navigator initialRouteName={"Splash"} headerMode={"none"}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Swiper" component={Swiper} />
      <Stack.Screen name="Dashboard" component={Dashboard} />

    </Stack.Navigator>
  );
};
export default RootStack;

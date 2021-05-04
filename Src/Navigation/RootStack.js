import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from "Screens/Splash/Splash";

const Stack = createStackNavigator();

const RootStack= () => {
  return (
    <Stack.Navigator initialRouteName={"Splash"} headerMode={"none"}>
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};
export default RootStack;

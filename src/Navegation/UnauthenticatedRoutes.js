import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SingIn from '../Screen/Acount/SingIn';
import SignUp from '../Screen/Acount/SignUp';
import RestorePasword from '../Screen/Acount/RestorePasword';

const Stack = createNativeStackNavigator()

export default function UnauthenticatedRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
        
      >
        <Stack.Screen component={SingIn} name="singin" />
        <Stack.Screen component={SignUp} name="signup" />
        <Stack.Screen component={RestorePasword} name="restorepassword" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

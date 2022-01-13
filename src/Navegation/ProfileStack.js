import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from '../Screen/Profile/Profile';
import SingIn from '../Screen/Acount/SingIn';
import SignUp from '../Screen/Acount/SignUp';

const Stack = createNativeStackNavigator()

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Profile}
        name="register"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SingIn}
        name="signin"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SignUp}
        name="signup"
        options={{ headerShown: false }}
      />      
    </Stack.Navigator>
  );
}

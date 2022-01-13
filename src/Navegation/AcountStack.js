import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SendConfirm from '../Screen/Acount/SendConfirm';
import ConfirmNumber from '../Screen/Acount/ConfirmNumber';

const Stack = createStackNavigator();

export default function AcountStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={SendConfirm}
          name="send-confirm"
          options={{
            title: "Confirma Tu Número De Teléfono",
            headerStyle: { backgroundColor: "#128c7E" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          component={ConfirmNumber}
          name="confirma-numbre"
          options={{
            title: "Confirmar Número",
            headerStyle: { backgroundColor: "#128c7E" },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

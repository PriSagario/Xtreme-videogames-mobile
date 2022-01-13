import React from "react";
import Cart from "../Screen/Store/Cart";
import Contact from "../Screen/Store/Contact";
import MessajesList from "../Screen/Store/MessajesList";
import Detail from "../Screen/Store/Detail";
import AddProduct from '../Screen/Store/AddProduct';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default function StoreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Cart}
        name="stores"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={AddProduct}
        name="add-product"
        options={{
          headerStyle: { backgroundColor: '#128C7E'},
          headerTintColor: "#fff",
          title: "Agregar Nuevo Producto",
        }}
      />
      <Stack.Screen
        component={Detail}
        name="detail"
        options={{
          headerTransparent: true,
          headerTintColor: "#128C7E",
          title: "",
        }}
      />
      <Stack.Screen
        component={MessajesList}
        name="messajes"
        options={{
          title: "Mensajes",
          headerStyle: { backgroundColor: "#128C7E" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        component={Contact}
        name="contac"
        options={{
          title: "Contácto",
          headerStyle: { backgroundColor: "#128C7E" },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}


import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyStore from "../Screen/MyStore/MyStore";
import AddProduct from "../Screen/Store/AddProduct";
import EditProduct from '../Screen/MyStore/EditProduct';

const Stack = createNativeStackNavigator()

export default function MyStoreStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#2E2B39" },
        headerTintColor: "#fff",
        headerShown: false
      }}
    >
      <Stack.Screen
        component={MyStore}
        name="mystore"
        options={{
          title: "Mi Tienda",
        }}
      />
      <Stack.Screen
        component={AddProduct}
        name="add-product"
        options={{
          title: "Agregar Nuevo Producto",
          headerStyle: { backgroundColor: "#FF5307" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        component={EditProduct}
        name="edit-product"
        options={{
          title: "Editar Producto",
        }}
      />
    </Stack.Navigator>
  );
}

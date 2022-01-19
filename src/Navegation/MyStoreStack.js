import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyStore from "../Screen/MyStore/MyStore";
import AddProduct from "../Screen/Store/AddProduct";
import EditProduct from '../Screen/MyStore/EditProduct';
import SearchGame from '../Components/SearchGame';
import gamesByGenre from "../Components/gamesByGenre";
import gameDetail from '../Components/gameDetail';
import SingIn from '../Screen/Acount/SingIn';
import SignUp from '../Screen/Acount/SignUp';
import Checkout from '../Components/Checkout';
import Profile from '../Screen/Profile/Profile';

const Stack = createNativeStackNavigator()

export default function MyStoreStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#2E2B39" },
        headerTintColor: "#fff",
        headerShown: true,
      }}
    >
      <Stack.Screen
        component={MyStore}
        name="mystore"
        options={{
          title: "Market place",
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
      <Stack.Screen
        component={SearchGame}
        name="search"
        options={{
          title: "Browse games",
        }}
      />    
      <Stack.Screen
        component={gamesByGenre}
        name="games-genre"
        options={{
          title: "Genders",
        }}
      />    
      <Stack.Screen
        component={gameDetail}
        name="game-detail"
        options={{
          title: "Game detail",
        }}
      />
      <Stack.Screen
        component={SingIn}
        name="signin"
        options={{ headerShown: true }}
      />
      <Stack.Screen
        component={SignUp}
        name="signup"
        options={{ headerShown: true }}
      />  
      <Stack.Screen
        component={Checkout}
        name="checkout"
        options={{ headerShown: true }}
      />  
      <Stack.Screen
        component={Profile}
        name="register"
        options={{ 
          headerShown: true, 
          headerStyle: { backgroundColor: '#343744' },
          headerTintColor: "#fff",
        }}
      />                      
    </Stack.Navigator>
  );
}

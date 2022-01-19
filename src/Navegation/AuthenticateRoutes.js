import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import StoreStack from './StoreStack' 
import MyStoreStack from './MyStoreStack';
import ProfileStack from './ProfileStack';
import ShopButton from '../Components/ShopButton';
import CustomDrawerContent from '../Components/CustomDrawerContent'
import CartButton  from '../Components/CartButton';

const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator() 
const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="myStore"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => mostrarIcono(route, color),
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#2FC4B8",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          alignItems: "center",
          backgroundColor: "#343744",
          paddingBottom: 3,
          height: 68
        },
        headerShown: false
      })}
    >
      <Tab.Screen
        component={StoreStack}
        name="store"
        options={{ title: "Cart", tabBarIcon: () => <CartButton /> }}
      />
      <Tab.Screen
        component={MyStoreStack}
        name="myStore"
        options={{ title: "Marketplace", tabBarIcon: () => <ShopButton /> }}
      />
      <Tab.Screen
        component={ProfileStack}
        name="profile"
        options={{ title: "My account" }}
      />
    </Tab.Navigator>
  );
};

function mostrarIcono(route, color) {
  let iconName = "";

  switch (route.name) {
    case "storeStack":
      iconName = "cart-outline";
      break;

    case "profile":
      iconName = "account-circle-outline";
      break;

    case "mystore":
      iconName = "cart-outline";
      break;
  }

  return (
    
    <Icon type="material-community" name={iconName} size={35} color={color} />
  );
}

export default function AuthenticateRoutes() {
  const [user, setUser]= useState(true)

  useEffect(() => {
    handleResetStorage()
  }, [])


  const handleResetStorage = async () => {
      await AsyncStorage.removeItem('games');
  } 

  return (
    <NavigationContainer>
        {user ? <TabBar /> : 
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
          >
            <Drawer.Screen
              name="Store"
              component={TabBar}
              options={{
                title: "Admin",
                drawerIcon: () => {
                  // <Icon type="material-community" name="store" size={24} />;
                },
              }}
            />
          </Drawer.Navigator>
        }
    </NavigationContainer>
  );
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from "react-native-elements";
import StoreStack from './StoreStack' // import StoreStack from './StoreStack';
import MyStoreStack from './MyStoreStack';
import ProfileStack from './ProfileStack';
import ShopButton from '../Components/ShopButton';
import CustomDrawerContent from '../Components/CustomDrawerContent'

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
        tabBarStyle: {
          // borderTopLeftRadius: 30,
          // borderTopRightRadius: 30,
          alignItems: "center",
          backgroundColor: "#343744",
          paddingBottom: 3,
        },
        headerShown: false
      })}
    >
      <Tab.Screen
        component={StoreStack}
        name="storeStack"
        options={{ title: "Cart" }}
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
    
    <Icon type="material-community" name={iconName} size={34} color={color} />
  );
}

export default function AuthenticateRoutes() {
  return (
    <NavigationContainer>
        <TabBar />
      {/* <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Store"
          component={TabBar}
          options={{
            title: "Store",
            drawerIcon: () => {
              <Icon type="material-community" name="store" size={24} />;
            },
          }}
        />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

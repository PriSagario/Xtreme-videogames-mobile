import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function ShopButton() {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
    screenOptions={({ route }) => ({
      tabBarInactiveTintColor: "#fff",
      tabBarActiveTintColor: "#2FC4B8",
 
    })}
      style={styles.container}
      onPress={() => {
        navigation.navigate("myStore");
      }}
    >
      <Icon name="store" color="#a09b9b" size={30} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#343744",
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 72,
    borderRadius: 36,
    top: -20,
    shadowRadius: 3,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.3,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 20,
  },
});

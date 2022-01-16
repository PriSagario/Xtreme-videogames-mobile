import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";

const CustomDrawerContent = (props) => {
    return (
        <View style={{ flex: 1 }}>
          <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
              <View style={styles.userInfoSection}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <DrawerItem
                      icon={({ color, size }) => (
                        <Icon
                          name="store"
                          color={color}
                          size={size}
                          type="material-community"
                        />
                      )}
                      label="Mi Tienda"
                      onPress={() => {
                        props.navigation.navigate("singin");
                      }}
                  />
                </View>
              </View>
            </View>
          </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawerContent

const styles = StyleSheet.create({})

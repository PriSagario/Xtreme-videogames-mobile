import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { connect } from 'react-redux'

const CartButton = ({ totalGamer }) => {
    const navigation = useNavigation();
    const [ctrl, setCtrol] = useState(true)
    const handleStorage = async () => {
      navigation.navigate("store");
    }

    return (
      <TouchableHighlight
        screenOptions={({ route }) => ({
          tabBarInactiveTintColor: "#fff",
          tabBarActiveTintColor: "#2FC4B8",
          })}
          style={styles.container}
          onPress={() => {
            handleStorage()
          }}
      >
         <View style={styles.viewContainer}>
             {(totalGamer !== null && totalGamer.length !== 0 ) && <Text style={styles.textCant}>{ totalGamer.length }</Text> }
        <Icon type="material-community" name="cart-outline" color="#a09b9b" size={30} />
        </View> 
      </TouchableHighlight>
    );
}
const mapStateToProps = (state) =>{
  // console.log(state)
  return {
    totalGamer: state.gameReducer.totalGamer,
  }
}
export default connect(mapStateToProps, null)(CartButton)


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: 72,
        height: 72,
        top: 1,
        shadowRadius: 3,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        padding: 20,
      },
      textCant: {
          fontSize: 15,
          color: '#fff',
          backgroundColor: 'red',
          textAlign: 'center',
          borderRadius: 26,
          width: 23,
          marginLeft: 24,
          marginTop: -8,
          position: 'absolute'
      }
})

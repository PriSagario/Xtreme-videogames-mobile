import React, { useRef } from "react";
import { View, Text, StyleSheet, Image, StatusBar, Dimensions, ScrollView } from "react-native";
import SignInForm from "../../Components/SignInForm";
import Toast from "react-native-easy-toast";
import { connect } from 'react-redux'

const { width, height } = Dimensions.get('screen')
const SingIn = ({ oneUser }) => {
    const toastRef = useRef();
// console.log('oneUser:', oneUser)
    return (
      <ScrollView>
          <View style={styles.container}>
          <StatusBar backgroundColor="#141028" />
          <Image
            source={require("../../../assets/joystick.png")}
            style={styles.imglogo}
          />
          <Text style={styles.textobaner}>¡Welcome! {oneUser ? oneUser?.name : '?'}</Text>
          <SignInForm toastRef={toastRef} />
          <Toast ref={toastRef} position="center" opacity={0.9} />
        </View>
      </ScrollView>
    )
}
const mapStateToProps = (state) =>{
  // console.log(state)
      return {
          oneUser: state.authReducer.oneUser,
      }
  }
  export default connect(mapStateToProps, null)(SingIn)  


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141028",
        height: height/1.1
      },
      imglogo: {
        width: width/4,
        height: height/9,
        marginTop: height/33,
        alignSelf: "center",
      },
      textobaner: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 30,
        color: "#797c7c",
        alignSelf: "center",
      },    
})

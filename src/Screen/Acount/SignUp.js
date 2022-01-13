import React, { useRef } from "react";
import { View, Text, StyleSheet, Image, StatusBar, Dimensions, ScrollView } from "react-native";
import Toast from "react-native-easy-toast";
import SignUpForm from "../../Components/SignUpForm";

const { width, height } = Dimensions.get('screen')
const SignUp = () => {
    const toastRef = useRef();
    return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor="#141028" />
        <Image
          source={require("../../../assets/joystick.png")}
          style={styles.imglogo}
        />
        <Text style={styles.textobaner}>Create Account</Text>
        <SignUpForm toastRef={toastRef} />
        <Toast ref={toastRef} position="center" opacity={0.9} />
      </View>
    </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141028",
        height: height/1.2
      },
      imglogo: {
        width: width/5,
        height: height/12,
        marginTop: height/47,
        alignSelf: "center",
      },
      textobaner: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 25,
        color: "#797c7c",
        alignSelf: "center",
      },   
  });
  
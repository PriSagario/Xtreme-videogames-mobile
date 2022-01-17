import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Platform } from "react-native";
import { Icon, Input, Button, Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { validaremail } from "../Utils/Utils";
import { isEmpty } from "lodash";
import Loading from "../Components/Loading";
import authActions from '../Redux/Actions/authActions'
import { connect } from 'react-redux'
// import * as GoogleSignIn from 'expo-google-sign-in  ';
import { ScrollView } from "react-native-gesture-handler";
const { width, height } = Dimensions.get('screen')

const SignInForm = (props) => {
    const { toastRef } = props;
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [show, setshow] = useState(true);
    const [loading, setloading] = useState(false);
    const [accessToen, setAccessToen] = useState();
    const [userInfo, setUserInfo] = useState();
    const navigation = useNavigation();  
    

    const iniciarsesion = async () => {
      if (isEmpty(email) || isEmpty(password)) {
        toastRef.current.show("You must enter the email and password values");
      } else if (!validaremail(email)) {
        toastRef.current.show("Ingrese un correo válido");
      } else {
        setloading(true);
        const errors = await props.logInUser(email, password)
        if(errors === undefined){
          setloading(false);
          setpassword('')
          setemail('')
          navigation.navigate("register")
        }
      }
    };

    // useEffect(() =>{
    //   initAsync()
    // }, [])

    // const androidClientId = '523253884861-0vgp87s1kpvk2uiuul3l7fvk9q83eamu.apps.googleusercontent.com'
    // const initAsync = async () => {
    //   try{
    //     await GoogleSignIn.initAsync({
    //       clientId: Platform.OS === 'android' ? androidClientId : null
    //     })
    //   }catch{

    //   }
    // }

    // const getUserDetails = async () => {
    //   const user = await GoogleSignIn.signInSilentlyAsync()
    // }
    // async function logIn() {
    //   try {
    //     await Facebook.initializeAsync({
    //       appId: '1580152262337885',
    //     });
    //     const { type, token, expirationDate, permissions, declinedPermissions } =
    //       await Facebook.logInWithReadPermissionsAsync({
    //         permissions: ['public_profile'],
    //       });
    //     if (type === 'success') {
    //       // Get the user's name using Facebook's Graph API
    //       const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
    //       Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    //     } else {
    //       // type === 'cancel'
    //     }
    //   } catch ({ message }) {
    //     alert(`Facebook Login Error: ${message}`);
    //   }
    // }
    
    return (
          <View style={styles.container}>
          <View
            style={{
              borderBottomColor: "#05F2DC",
              borderBottomWidth: 2,
              width: width/5,
            }}
          />
          <Input
            placeholder="Email"
            containerStyle={styles.input}
            inputStyle={{'color': 'white'}}
            rightIcon={{
              type: "material-community",
              name: "at",
              color: "#128c7e",
            }}
            leftIcon={{
              type: "material-community",
              name: "account-circle-outline",
              color: "#128c7e",
            }}
            onChangeText={(text) => {
              setemail(text);
            }}
            value={email}
          />
          <Input
            placeholder="Password"
            containerStyle={styles.input}
            inputStyle={{'color': 'white'}}
            leftIcon={{
              type: "material-community",
              name: "security",
              color: "#128c7e",
            }}
            rightIcon={{
              type: "material-community",
              name: show ? "eye-outline" : "eye-off-outline",
              color: "#128c7e",
              onPress: () => setshow(!show),
            }}
            onChangeText={(text) => {
              setpassword(text);
            }}
            secureTextEntry={show}
            value={password}
          />
          <Button
            title="Sign In"
            containerStyle={styles.btnentrar}
            buttonStyle={{ backgroundColor: "#11EDD5" }}
            onPress={() => iniciarsesion()}
            titleStyle={{ fontSize: 22 }}
          />
          <Text style={styles.txtcrearcuenta}>
            You do not have an account?
            <Text
              style={styles.cuenta}
              onPress={() => navigation.navigate("signup")}
            >
              {" "}
              Sign Up
            </Text>
          </Text>
          <Text style={styles.txto}></Text>
          <View style={styles.btnlogin}>
            <TouchableOpacity style={styles.btnloginsocial}>
              <Icon
                size={34}
                type="material-community"
                name="facebook"
                color="#fff"
                backgroundColor="transparent"
                onPress={() => logIn()}
              />
            </TouchableOpacity>
          </View>
          <Loading isVisible={loading} text="Please wait" />
        </View>
    )
}
const mapStateToProps = (state) =>{
  // console.log(state)
      return {
          oneUser: state.authReducer.oneUser,
      }
  }
  const mapDispatchToProps = {
      logInUser: authActions.logIn
  }
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#252525",
        flex: 1,
        marginTop: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: "center",
        paddingTop: 20,
        // height: height-300
      },
      input: {
        width: width-40,
        marginTop: height/37,
        height: height/14,
      },
      btnentrar: {
        width: width-40,
        marginTop: height/37,
      },
      txtcrearcuenta: {
        marginTop: height/37,
        color: 'white',
        fontSize: 18
      },
      cuenta: {
        color: "#128c7e",
        fontFamily: "Roboto",
        fontSize: 22,
      },
      txto: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: height/157,
        color: "#128c7e",
      },
      btnlogin: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: width,
      },
      btnloginsocial: {
        backgroundColor: "#11EDD5",
        paddingHorizontal: width/5,
        paddingVertical: width/44,
        borderRadius: 5,
      },    
})

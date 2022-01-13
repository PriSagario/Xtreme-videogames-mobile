import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Icon, Input, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { validaremail } from "../Utils/Utils";
import authActions from "../Redux/Actions/authActions";
import { connect } from 'react-redux'
import { isEmpty, size } from "lodash";
import Loading from "../Components/Loading";
const { width, height } = Dimensions.get('screen')

const SignUpForm = (props) => {
    const { toastRef } = props;
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [urlPhoto, setUrlPhoto] = useState("");
    const navigation = useNavigation();
    const [show, setshow] = useState(false);
    const [loading, setloading] = useState(false);

    const crearCuenta = async () =>{
        if (isEmpty(email) || isEmpty(password) || isEmpty(repeatPassword)) {
          toastRef.current.show("All fields are required");
        } else if (!validaremail(email)) {
          toastRef.current.show("Email is not valid");
        } else if (password !== repeatPassword) {
          toastRef.current.show("Passwords have to be the same");
        } else if (size(password) < 6) {
          toastRef.current.show(
            "Passwords must be at least 6 characters long"
          );
        } else {
            setloading(true);
            const errors = await props.insertUser(name, lastName, userName, email, password, urlPhoto)
            if(errors === undefined){
              setloading(false);
              setEmail('')
              setName('')
              setLastName('')
              setUserName('')
              setPassword('')
              setRepeatPassword('')
              setUrlPhoto('')
            }
        }
      }    

    return (
        <View style={styles.container}>
        <View
          style={{
            borderBottomColor: "#05F2DC",
            borderBottomWidth: 2,
            width: width/5,
            height: height/25
          }}
        />
        <Input
          placeholder="Name"
          containerStyle={styles.input}
          inputStyle={{'color': 'white'}}
          rightIcon={{
            type: "material-community",
            name: "account-edit-outline",
            color: "#128c7e",
          }}
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
        />
        <Input
          placeholder="Lastname"
          containerStyle={styles.input}
          inputStyle={{'color': 'white'}}
          rightIcon={{
            type: "material-community",
            name: "account-edit-outline",
            color: "#128c7e",
          }}
          onChangeText={(text) => {
            setLastName(text);
          }}
          value={lastName}
        />        
        <Input
          placeholder="Username"
          containerStyle={styles.input}
          inputStyle={{'color': 'white'}}
          rightIcon={{
            type: "material-community",
            name: "account-edit-outline",
            color: "#128c7e",
          }}
          onChangeText={(text) => {
            setUserName(text);
          }}
          value={userName}
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
          onChangeText={(text) => {
            setEmail(text);
          }}
          value={email}
        />   
        <Input
          placeholder="Password"
          containerStyle={styles.input}
          inputStyle={{'color': 'white'}}
        rightIcon={{
            type: "material-community",
            name: show ? "eye-off-outline" : "eye-outline",
            color: "#128c7e",
            onPress: () => setshow(!show),
          }}
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry={!show}
          value={password}
        />
        <Input
          placeholder="Repeat password"
          containerStyle={styles.input}
          inputStyle={{'color': 'white'}}
        rightIcon={{
            type: "material-community",
            name: show ? "eye-off-outline" : "eye-outline",
            color: "#128c7e",
            onPress: () => setshow(!show),
          }}
          onChangeText={(text) => {
            setRepeatPassword(text);
          }}
          secureTextEntry={!show}
          value={repeatPassword}
        />
        <Input
          placeholder="Photo"
          containerStyle={styles.input}
          inputStyle={{'color': 'white'}}
          rightIcon={{
            type: "material-community",
            name: "account-edit-outline",
            color: "#128c7e",
          }}
          onChangeText={(text) => {
            setUrlPhoto(text);
          }}
          value={urlPhoto}
        />
        <Button
          title="Create Account"
          containerStyle={styles.btnentrar}
          buttonStyle={{ backgroundColor: '#2CF4B8' }}
          onPress={() => crearCuenta()}
        />
       <Loading isVisible={loading} text="Please wait" />
      </View>
    )
}
    const mapStateToProps = (state) =>{
        return {
            user: state.authReducer.user
        }
    }
    const mapDispatchToProps = {
        insertUser: authActions.insertUser
    }
    export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#252525",
        flex: 1,
        marginTop: height/55,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: "center",
        paddingTop: height/57,
      },
      input: {
        width: width-40,
        marginTop: height/37,
        height: height/27,
        color: '#f7f9f9'
      },
      btnentrar: {
        width: width-40,
        marginTop: height/22,
        // marginBottom: height,
      },
      btnentrar2: {
        width: width-40,
        marginTop: height/52,
        marginBottom: height/40,
      },      
      cuenta: {
        color: "#128c7e",
        fontFamily: "Roboto",
        fontSize: 15,
        
      },
      txtcrearcuenta: {
        marginTop: height/57,
        color: 'white',
      },
})

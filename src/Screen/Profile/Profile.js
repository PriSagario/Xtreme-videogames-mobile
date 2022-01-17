import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native'
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('screen')

const Profile = ({ oneUser }) => {
    const navigation = useNavigation();  
     console.log(oneUser)
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.logedUser}>
                    <Image
                        source={require("../../../assets/logo.png")}
                        style={styles.imglogo}
                    />
                    <Text style={styles.textTitle}>Welcome to Extreme</Text>
                    <Text style={styles.textSubtitle}>Logged-in users can do more! sign-in now</Text>
                    <View style={styles.viewBtn}>
                        <Button
                            title="Sign In"
                            containerStyle={styles.btnSign}
                            buttonStyle={{ backgroundColor: "#11EDD5" }}
                            onPress={() => navigation.navigate("signin")}
                            titleStyle={{ fontSize: 22 }}
                        />
                        <Button
                            title="New account"
                            containerStyle={styles.btnAccount}
                            buttonStyle={{ backgroundColor: "#2B2E39" }}
                            onPress={() => navigation.navigate("signup")}
                            titleStyle={{ fontSize: 22 }}
                        />          
                    </View>
                </View>
                <View style={styles.infoUser}>
                    <Text style={styles.textAccount}>My account</Text>
                    <Text style={styles.textName}>Name : {oneUser.name} {oneUser.lastname}</Text>
                    <Text style={styles.textMail}>  Email : {oneUser.mail}</Text>
                </View>            
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
export default connect(mapStateToProps, null)(Profile)

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
    logedUser: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        height: height/2,
        backgroundColor: '#2B2E39',
        paddingTop: height/24,

    },
    infoUser: {
        height: height/2,
        backgroundColor: '#343744',
    },
    imglogo: {
        width: width/4,
        height: height/9,
        marginTop: height/33,
        alignSelf: "center",
      },
    textTitle: {
        fontSize: 25,
        color: '#fff',
    },
    textSubtitle: {
        fontSize: 18,
        color: '#2CF4B8',
    },
    textAccount: {
        fontSize: 26,
        color: '#2CF4B8',
        marginTop: height/60,
        marginLeft: width/3,
        marginBottom: height/25,
    },
    viewBtn: {
        width:width,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    btnSign: {
        width: width/2.5,
    },
    btnAccount: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#2DF2B8',
        // height: height/18
    },
    textName: {
        fontSize: 24,
        color: '#fff',
        marginBottom: height/30,
        marginLeft: width/16,
    },
    textMail: {
        fontSize: 24,
        color: '#fff',
        // marginTop: height/60,
         marginLeft: width/30,
    }
})

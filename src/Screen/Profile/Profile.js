import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native'
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get('screen')

const Profile = () => {
    const navigation = useNavigation();  
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
                </View>            
            </View>
        </ScrollView>
    )
}

export default Profile

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
        fontSize: 18,
        color: '#2CF4B8',
        marginTop: height/60,
        marginLeft: width/20,
    },
    viewBtn: {
        width:width-140,
        // height: height-22,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height/8,
        marginBottom: height/15.5,
    },
    btnAccount: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#2DF2B8'
    },
    btnSign: {
        width: width/3,
        paddingRight: 10,
    }
})

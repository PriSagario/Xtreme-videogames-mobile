import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native'
import { Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get('screen')

const Cart = () => {
    const navigation = useNavigation(); 
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.logedUser}>
                    <Icon type="material-community" name={'emoticon-sad-outline'} size={64} color={'#2CF4B8'} />
                    <Text style={styles.textTitle}>Your cart is empty</Text>
                    <Text style={styles.textSubtitle}>Browse and buy products on Extreme</Text>
                </View>
                <View style={styles.infoUser}>
                    <View style={styles.viewBtn}>
                        <View style={styles.viewTotal}>
                            <Text style={styles.textTotal}>Total:</Text>
                            <Text style={styles.textCurrency}>$00.0</Text>
                        </View>
                        <Button
                            title="Checkout now"
                            containerStyle={styles.btnSign}
                            buttonStyle={{ backgroundColor: '#AF3181' }}
                            onPress={() => navigation.navigate("signin")}
                            titleStyle={{ fontSize: 22 }}
                        />
                     </View>

                </View>            
            </View>
        </ScrollView>
    )
}

export default Cart

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
        paddingTop: height/4,

    },
    infoUser: {
        height: height/2.7,
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
        marginTop: height/30
    },
    textSubtitle: {
        fontSize: 18,
        color: '#2CF4B8',
        marginTop: height/40
    },
    textAccount: {
        fontSize: 18,
        color: '#2CF4B8',
        marginTop: height/60,
        marginLeft: width/20,
    },
    viewBtn: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height/30,
        marginBottom: height/15.5,
        paddingLeft: 20
    },
    btnSign: {
        width: width/2.1,
        paddingRight: 10,
    },
    textTotal: {
        fontSize: 20,
        color: '#fff'
    },
    textCurrency: {
        paddingTop: 10,
        fontSize: 35,
        color: '#fff'
    },
    viewTotal: {

    }    
})

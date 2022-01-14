import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Button, Icon } from "react-native-elements";
const { width, height } = Dimensions.get('screen')


const NoCart = () => {
    return (
        <View style={styles.container}>
            <Icon type="material-community" name={'emoticon-sad-outline'} size={64} color={'#2CF4B8'} />
            <Text style={styles.textTitle}>Your cart is empty</Text>
            <Text style={styles.textSubtitle}>Browse and buy products on Extreme</Text>
        </View>    )
}

export default NoCart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 25,
        color: '#fff',
        marginTop: height/50
    },
    textSubtitle: {
        fontSize: 18,
        color: '#2CF4B8',
        marginTop: height/40
    },

})

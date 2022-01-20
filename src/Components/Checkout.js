import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

const Checkout = () => {

    const _onChange = () => {
        console.log('datos ok');
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Purchasing process</Text>
            <CreditCardInput _onChange />
        </View>
    )
}

export default Checkout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 420,
        flexDirection: 'column',
        backgroundColor: '#343744',
        paddingLeft: 20,
    }, 
    text: {
        fontSize: 25,
        color: '#fff',
        marginTop: 30,
        marginLeft: 50,
        marginBottom: 150

    }   
})

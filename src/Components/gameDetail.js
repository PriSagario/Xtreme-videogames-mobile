import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const gameDetail = ({ route }) => {
    const { idGame } = route.params;
    return (
        <View>
            <Text>Game detail</Text>
            <Text>ID: { idGame }</Text>
        </View>
    )
}

export default gameDetail

const styles = StyleSheet.create({})

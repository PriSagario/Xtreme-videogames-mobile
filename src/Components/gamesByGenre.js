import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import GamesList from '../Components/GamesList';
const { width, height } = Dimensions.get('screen')

const gamesByGenre = ({ route, navigation }) => {
    const { item, name } = route.params;

    return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.textNameGenre}>{name}</Text>
                    <TouchableOpacity
                        onPress={() => handlePress()}
                    >
                        {
                            item &&
                            item.map((item, i)=> <GamesList key={i} item={ item }/>)
                        }
                    </TouchableOpacity>
                </View>
            </ScrollView>

    )
}
export default gamesByGenre

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#20222B',
        paddingTop: height/20,
    }, 
    textNameGenre: {
        fontSize: 25,
        color: '#AF3181',
        marginBottom: height/35,
        marginLeft: width/30,
    }    
})

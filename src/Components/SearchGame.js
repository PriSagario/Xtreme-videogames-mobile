import React from 'react'
import { StyleSheet, TextInput, View, Dimensions, SafeAreaView } from 'react-native'
const { width, height } = Dimensions.get('screen')

const SearchGame = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <TextInput
                    placeholder="Search"
                    placeholderTextColor='#a39f9f'
                    style={styles.input}
                    // onPress={() => navigation.navigate("signin")}
                />
            </SafeAreaView>
        </View>
    )
}

export default SearchGame

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#20222B',
        height: height,
    },
    input: {
        width: width-45,
        height: height-810,
        margin: 18,
        borderWidth: 1,
        padding: 10,
        marginTop: height/38,
        fontSize: 26
    },
})

import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, TextInput, SafeAreaView } from 'react-native'
import HorizontalList from '../../Components/HorizontalList'

const { width, height } = Dimensions.get('screen')
const data = ['Action', 'Adventure', 'RPG', 'Shooter', 'Indie', 'Casual', 'Sports', 'Racing', 'Massively Multiplayer']
const MyStore = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.container}>
            <SafeAreaView>
                <TextInput
                    placeholder="Search games..."
                    placeholderTextColor='#fff'
                    style={styles.input}
                    onChangeText={(value) => {
                        dataFilter(auxCities, value) 
                    }}
                />
            </SafeAreaView>
                <HorizontalList 
                    style={styles.horizontalList}
                    data={ data }
                />
                <Text onPress={()=>navigation.toggleDrawer()} style={styles.text}>My Storeeee</Text>
            </View>
        </ScrollView>
    )
}

export default MyStore

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#20222B',
        height: height,
    },
    text: {
        color: '#fff'
    },
    input: {
        width: width-45,
        height: height-810,
        margin: 18,
        borderWidth: 1,
        padding: 10,
        marginTop: height/12
    },
})


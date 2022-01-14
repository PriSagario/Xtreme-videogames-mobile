import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import HorizontalList from '../../Components/HorizontalList'
import { Icon } from "react-native-elements"
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('screen')
const data = ['Action', 'Adventure', 'RPG', 'Shooter', 'Indie', 'Casual', 'Sports', 'Racing', 'Massively Multiplayer']
const MyStore = () => {
    const navigation = useNavigation(); 
    const handlePress = () => {
        navigation.navigate("search")
    } 
    return (
        <ScrollView>
            <View style={styles.container}>
    
                {/* <Text style={styles.textTitle}>Browse games</Text> */}
                    <TouchableOpacity
                        onPress={() => handlePress()}
                    >
                <View style={styles.viewSearch}>
                    <View style={styles.search}>
                       <Icon type="material-community" name={'magnify'} size={34} color={'#2CF4B8'} />
                      <Text  style={styles.textSearch}>Search</Text> 
                    </View>

                </View>
                    </TouchableOpacity>
            
                    <HorizontalList 
                        style={styles.horizontalList}
                        data={ data }
                    />
            </View>
        </ScrollView>
    )
}

export default MyStore

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#20222B',
        height: height,
        paddingTop: height/30
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
        marginTop: height/38,
        fontSize: 26
    },
    textTitle: {
        fontSize: 28,
        color: '#fff',
        marginTop: height/45,
        marginLeft: width/18,
        marginBottom: height/60
    },
    viewSearch: {
        width: width/1.1,
       height: height/18,
       marginLeft: width/19,
       backgroundColor: '#343744',
       paddingLeft: width/20
    },
    textSearch: {
        fontSize: 24,
        color: '#2CF4B8',
        // marginRight: 10
    },
    search: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
})


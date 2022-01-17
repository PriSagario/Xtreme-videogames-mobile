import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, FlatList, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native"
const { width, height } = Dimensions.get('window')

const HorizontalGames = ({ item }) => {
    const [data,setData] = useState(item)
    const navigation = useNavigation()

    const handleGameDetail = (idGame) => {
        navigation.navigate("game-detail", { idGame: idGame })
    }

    return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress = {() => handleGameDetail(data._id) }         
                >
                    <View style={styles.viewContainer}>
                        <View style={styles.viewImg}>
                                <Image
                                    source={{uri: data.background_image}}
                                    style={styles.imglogo}
                                />                   
                        </View>
                        <View style={styles.viewData}>
                            <Text style={styles.textTitle}>
                                {data.name}
                            </Text>
                            <Text style={styles.textPrice}>
                                Price: {data.price}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
    )
}

export default HorizontalGames

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 40,
        marginBottom: 10,
        marginRight: 2,
        backgroundColor: '#343744',
    },
     viewContainer: {
        width: 225,
     },
     viewImg: {
        width: 200,
     },
     imglogo: {
        width: 225,
        height:380,
        backgroundColor: 'rgba(0,0,0,0.6)',
     },
     viewData: {
        marginTop: 10,
     },
     textTitle: {
         fontSize: 20,
         color: '#fff',
         paddingLeft: 15,
         paddingRight: 10
     },
     textPrice: {
         fontSize: 23,
         color: '#fff',
         marginTop: 20,
         marginBottom: 10,
         paddingLeft: 15
     },
})

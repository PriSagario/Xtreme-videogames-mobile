import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('screen')

const GamesList = ({ item }) => {
    const [data,setData] = useState(item)
    
    return (
        <View style={styles.container}>
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
        </View>
    )
}

export default GamesList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: '#343744',
        paddingLeft: 20,
    },
     viewContainer: {
        flexDirection: 'row',
        width: 180,
        marginRight:10,
     },
     viewImg: {
        width: 180,
     },
     imglogo: {
        width: 150,
        height:100,
        backgroundColor: 'rgba(0,0,0,0.6)',
        marginTop:20,
        marginBottom:10,
     },
     viewData: {
        marginTop: 5,
     },
     textTitle: {
         marginTop: height/120,
         fontSize: 20,
         color: '#fff'
     },
     textPrice: {
         fontSize: 23,
         color: '#2CF4B8',
         marginTop: height/20,
        paddingBottom: height/60,
         marginLeft: width/10,
     }
})

import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const HorizontalGames = ({ item }) => {
    const [data,setData] = useState(item)
    
    // console.log(data)
    return (
        <View style={styles.container}>
           <View style={styles.viewContainer}>
               <View style={styles.viewImg}>
                    <Image
                    //source={{uri: data.background_image}}
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

export default HorizontalGames

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 40,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: '#343744',
        paddingLeft: 20,
    },
     viewContainer: {
        width: 280,
        marginRight:10,
     },
     viewImg: {
        width: 280,
     },
     imglogo: {
        width: 325,
        height:230,
        backgroundColor: 'rgba(0,0,0,0.6)',
        marginTop:20,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
     },
     viewData: {
        marginTop: 10,
     },
     textTitle: {
         fontSize: 20,
         color: '#fff'
     },
     textPrice: {
         fontSize: 23,
         color: '#fff',
         marginTop: 20,
         marginBottom: 10
     }
})

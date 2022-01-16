import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window')

const HorizontalGames = ({ item }) => {
    const [data,setData] = useState(item)
    
    //  console.log('item desde horizontalGames', item.background_image)
    return <FlatList 
                data={data}
                keyExtractor={(item) => String(item)}
                style={styles.horizontalList}
                horizontal
                renderItem={({item}) => <View style={{
                    backgroundColor:item,
                    height: width/2.16,
                    width: width/2.5,
                }}>
                    <View style={styles.card}>
                    <TouchableOpacity
                        onPress={() => handlePress(item)}
                    >
                        <Text>TITULO</Text>
                        <Text style={styles.itemText}>{ item.name }</Text>
                    </TouchableOpacity> 
                    </View>
                    {/* <Loading isVisible={loading} text="Please wait" /> */}
                </View>}
            />
    // return (
    //     <View style={styles.container}>
    //        <View style={styles.viewContainer}>
    //            <View style={styles.viewImg}>
    //                 <Image
    //                     source={{uri: data.background_image}}
    //                     style={styles.imglogo}
    //                 />                   
    //            </View>
    //            <View style={styles.viewData}>
    //                <Text style={styles.textTitle}>
    //                   {data.name}
    //                </Text>
    //                <Text style={styles.textPrice}>
    //                  Price: {data.price}
    //                </Text>
    //            </View>
    //        </View>
    //     </View>
    // )
}

export default HorizontalGames

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     flexDirection: 'column',
    //     marginLeft: 40,
    //     marginBottom: 10,
    //     marginRight: 10,
    //     backgroundColor: '#343744',
    //     paddingLeft: 20,
    // },
    //  viewContainer: {
    //     width: 280,
    //     marginRight:10,
    //  },
    //  viewImg: {
    //     width: 180,
    //  },
    //  imglogo: {
    //     width: 150,
    //     height:280,
    //     backgroundColor: 'rgba(0,0,0,0.6)',
    //     marginTop:20,
    //     borderBottomLeftRadius:10,
    //     borderBottomRightRadius:10,
    //  },
    //  viewData: {
    //     marginTop: 10,
    //  },
    //  textTitle: {
    //      fontSize: 20,
    //      color: '#fff'
    //  },
    //  textPrice: {
    //      fontSize: 23,
    //      color: '#fff',
    //      marginTop: 20,
    //      marginBottom: 10
    //  },
     card: {
        backgroundColor: '#343744',
        // marginTop: 37,
        marginRight:5,
        // marginBottom: 7,
        marginLeft: 7,
        height: width/20,
        justifyContent: 'center',
        alignItems: 'center',
 
    },
    horizontalList: {
       paddingLeft:16 
    },
    itemText: {
        color: '#fff',
        fontSize: 20,
    }     
})

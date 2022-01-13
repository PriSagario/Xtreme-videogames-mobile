import React from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements';

const { width, height } = Dimensions.get('window')

const HorizontalList = ({ data }) => {
    return <FlatList 
                data={data}
                keyExtractor={(item) => String(item)}
                style={styles.horizontalList}
                horizontal
                renderItem={({item}) => <View style={{
                    backgroundColor:item,
                    height: width/2.16,
                    width: width/2.5,
                    // alignItems: 'center'
                }}>
                    <View style={styles.card}>
                        
                        <Text style={styles.itemText}>{item}</Text>
                    </View>
                </View>}
            />
}

export default HorizontalList

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#343744',
        marginTop: 37,
        marginRight:5,
        marginBottom: 7,
        marginLeft: 7,
        height: width/7.4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#2DF2B8'
    },
    horizontalList: {
       paddingLeft:16 
    },
    itemText: {
        color: '#fff',
        fontSize: 20,
    }
})

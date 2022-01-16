import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native"
import { connect } from 'react-redux'
import gameActions from '../Redux/Actions/gameActions';
import Loading from "../Components/Loading";


const { width, height } = Dimensions.get('window')

const HorizontalList = ({ data, getGenre }) => {
    const [loading, setloading] = useState(false);
    const navigation = useNavigation();
   
    const handlePress = (item) => {
        setloading(true)
        getGenre(item)
        .then((res) => {
            navigation.navigate("games-genre", { item: res.response.data.res, name: item })
            
          })
          .catch((err) => console.log(err));          
    }
    
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
                           <Text style={styles.itemText}>{ item }</Text>
                       </TouchableOpacity> 
                    </View>
                    {/* <Loading isVisible={loading} text="Please wait" /> */}
                </View>}
            />
}
const mapDispatchToProps = {
    getGenre: gameActions.getGameByGenre, 
  }

export default connect(null, mapDispatchToProps)(HorizontalList)
// export default HorizontalList

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#343744',
        marginTop: 37,
        marginRight:5,
        // marginBottom: 7,
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

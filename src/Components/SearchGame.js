import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Dimensions, SafeAreaView, Text, FlatList, TouchableOpacity, Image } from 'react-native'
const { width, height } = Dimensions.get('screen')
import gameActions from '../Redux/Actions/gameActions';
import { connect } from 'react-redux'
import { useNavigation } from "@react-navigation/native"


const SearchGame = ({ dataFilter, route, dataGamer }) => {
    const [ctrlValue, setCtrlValue] = useState('')
    const { dataGames } = route.params;
    const navigation = useNavigation();
 
    const handleGameDetail = (idGame) => {
        navigation.navigate("game-detail", { idGame: idGame })
    }
// console.log('dataGames', dataGames)
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <TextInput
                    placeholder="Search"
                    placeholderTextColor='#a39f9f'
                    style={styles.input}
                    onChangeText={(value) => {
                        dataFilter(dataGames, value) 
                        setCtrlValue(value)
                    }}
                />
            </SafeAreaView>
            {
                ctrlValue !== '' ?
                (dataGamer.length !== 0) ?
                <FlatList 
                    data={dataGamer}
                    keyExtractor={(item, index) =>{return item._id}}
                    renderItem={({item, index}) => (
                        <View style={styles.postView}>
                            <TouchableOpacity 
                                onPress = {() => handleGameDetail(item._id) }
                            >
                            <Text style={styles.textPhoto}>{item.name}</Text>
                            <Image  style={styles.coverPhoto} source={{uri: item.background_image}}/>
                            </TouchableOpacity>
                        </View>
                    )}
                /> :
                <Text style={styles.textNo}>Game not found...</Text>
                :
                <Text></Text>
            }            
        </View>
    )
}
const mapDispatchToProps = {
    dataFilter: gameActions.filterGames,
  }
  const mapStateToProps = (state) => {
    return {
        dataGamer: state.gameReducer.dataGamer,
    }
  }  
export default connect(mapStateToProps, mapDispatchToProps)(SearchGame)

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
    postView: {
        alignItems: 'center',
        marginTop: height/30,
    },
    textPhoto: {
        marginBottom:height/-40,
        backgroundColor: '#AF3181',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        textAlign: 'center',
        color: 'white',
        fontSize: 22,
        paddingTop: height/90,
        paddingBottom: height/90,
    },
    coverPhoto: {
        width: 380,
        height:230,
        marginTop:20,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    textNo: {
        color: '#AF3181',
        fontSize:40, 
        textAlign: 'center'
     },
})

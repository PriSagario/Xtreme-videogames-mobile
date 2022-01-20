// import { set } from 'lodash'
import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { Icon } from "react-native-elements"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux'
import gameActions from '../Redux/Actions/gameActions';

const { width, height } = Dimensions.get('screen')

const CardCart = ({ data, uploadStorage, totalBuyGame, totalGamer }) => {
    const [cantidad, setCantidad] = useState(2)
    const [subTotal, setSubTotal] = useState(0)

    const handleMenos = async (id) => {
        cantidad > 1 && setCantidad(data.amount - 1)
        let res = data.subtotal - data.price
        let res2 = data.amount - 1
        const result = await AsyncStorage.getItem('games')
        let games = [];
        if(result !== null) games = JSON.parse(result)
        games.forEach(elem => {
            if(elem.id === id){
                elem.amount = res2
                elem.subtotal = res.toPrecision(4)
            }
           
        });
        uploadStorage(games)
        totalBuyGame(games)
    }

    const handleMas = async (id) => {
        setCantidad(cantidad + 1)
        let res = data.price * cantidad
        const result = await AsyncStorage.getItem('games')
        let games = [];
        if(result !== null) games = JSON.parse(result)
        games.forEach(elem => {
            if(elem.id === id){
                elem.amount= cantidad
                elem.subtotal = res.toPrecision(4)
            }
            
        });
        uploadStorage(games) 
        totalBuyGame(games)      
    }

    const handleDelete = async (id) => {
        const result = await AsyncStorage.getItem('games')
        let games = [];
        let position
        if(result !== null) games = JSON.parse(result)
        let deleteGame = games.filter((item) => item.id !== id);
        uploadStorage(deleteGame)
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>
              <Image
                source={{uri: data.image}}
                style={styles.imglogo}
              />
            </View>
            <View style={styles.containerData}>
                <View style={styles.titleAndDelete}>
                    <View style={styles.viewTitle}>
                        <Text style={styles.textGame}>
                            { data.name }
                        </Text>
                    </View>
                    <View style={styles.viewDelete}>
                        <Icon 
                            onPress={() => handleDelete(data.id)} 
                            type="material-community" 
                            name={'delete-outline'} 
                            size={34} color={'#2CF4B8'} 
                        />
                    </View>
                </View>
                <View style={styles.amountPrice}>
                    <View style={styles.viewAmount}>
                        <View style={styles.viewPrice}>
                            {
                                cantidad > 1 ?
                                <Icon 
                                    onPress={() => handleMenos(data.id)} 
                                    type="material-community" 
                                    name={'minus-circle-outline'} 
                                    size={34} 
                                    color={'#2CF4B8'} 
                                /> :
                                <Icon 
                                    type="material-community" 
                                    name={'minus-circle-outline'} 
                                    size={34} 
                                    color={'#5b5858'} 
                                />
                            }
                            <Text style={styles.textAmount}>{data.amount}</Text>
                            <Icon 
                                onPress={() => handleMas(data.id)}  
                                type="material-community" 
                                name={'plus-circle-outline'} 
                                size={34} 
                                color={'#2CF4B8'} 
                            />
                        </View>
                    </View>
                    <View style={styles.viewAmount}>
                        <Text style={styles.textPrice}>$ { data.subtotal }</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const mapDispatchToProps = {
    uploadStorage: gameActions.uploadAsyncStorage,
    totalBuyGame: gameActions.totalBuyGame
  }
const mapStateToProps = (state) =>{
    return { oneUser: state.authReducer.oneUser,
             totalGamer: state.gameReducer.totalGamer, }
}
export default connect(null, mapDispatchToProps)(CardCart)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#343744',
        width: width/1.1,
    },
    viewImg: {
        paddingRight: width/70,
    },
    imglogo: {
        width: width/5,
        height: height/9,
        marginLeft: width/30,
    },
    containerData: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        marginTop: height/50,
    },
    titleAndDelete: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: width/1.6,
    },
    textGame: {
        fontSize: 18,
        color: '#fff',
        paddingBottom: width/30,
        width: width/1.8
    },
    textPrice: {
        fontSize: 24,
        color: '#fff',
    },
    viewDelete: {
        justifyContent: 'center'
    },
    amountPrice: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width/1.7
    },
    viewPrice: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width/4
    },
    textAmount: {
        fontSize: 24,
        color: '#fff'
    },
    viewAmount: {
        marginBottom: height/50
      } 
})

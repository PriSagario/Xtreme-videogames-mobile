import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, Modal, Pressable } from 'react-native'
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import CardCart from '../../Components/CardCart';
import NoCart from '../../Components/NoCart';
import gameActions from '../../Redux/Actions/gameActions';
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('screen')

const Cart = ({ totalGamer, oneUser, totalBuyGame, totalBuy }) => {
    const [data, setData] = useState(totalGamer)
    const [modalVisible, setModalVisible] = useState(false);
     const [total, setTotal] = useState(0)
    const navigation = useNavigation();

    useEffect( async () => {
        totalBuyGame(totalGamer)
    }, [])

    const handleRegister = () => {
        setModalVisible(!modalVisible)
        navigation.navigate('signin')
      }

    const handleBuy = () => {
        (Object.keys(oneUser).length === 0) ? setModalVisible(true) : navigation.navigate('checkout')
      }
    //   console.log(totalBuy);
      
    return (
            <View style={styles.container}>
                <View style={styles.logedUser}>
                <ScrollView>
                { totalGamer &&
                   totalGamer.length != 0 ?
                    totalGamer.map((elem, i) => {
                        //  console.log('elem', elem)
                       return <View style={styles.viewContent} key={i}>
                            <CardCart  data={elem} />
                        </View> 
                    })
                     : <NoCart /> 
                }
                 </ScrollView> 
                </View>
                <View style={styles.infoUser}>
                    <View style={styles.viewBtn}>
                        <View style={styles.viewTotal}>
                            <Text style={styles.textTotal}>Total:</Text>
                            <Text style={styles.textCurrency}>$ { totalBuy.toPrecision(4) }</Text>
                        </View>
                        <Button
                            title="Checkout now"
                            containerStyle={styles.btnSign}
                            buttonStyle={{ backgroundColor: '#AF3181' }}
                            onPress={() => handleBuy()}
                            titleStyle={{ fontSize: 22 }}
                        />
                     </View>
                </View>            
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Sign-in to continue</Text>
                    <Button
                      title="Sign In"
                      containerStyle={styles.btnentrar}
                      buttonStyle={{ backgroundColor: "#11EDD5" }}
                      onPress={() => handleRegister()}
                      titleStyle={{ fontSize: 22 }}
                    />
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Exit</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>

            </View>
    )
}
  const mapStateToProps = (state) =>{
    return { totalGamer: state.gameReducer.totalGamer, 
             totalBuy: state.gameReducer.totalBuy,
             oneUser: state.authReducer.oneUser, }
}
const mapDispatchToProps = {
    totalBuyGame: gameActions.totalBuyGame
  }
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
    logedUser: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: height/2,
        backgroundColor: '#2B2E39',
        paddingTop: height/12,

    },
    infoUser: {
        height: height/2.7,
        backgroundColor: '#343744',
    },
    imglogo: {
        width: width/4,
        height: height/9,
        marginTop: height/33,
        alignSelf: "center",
      },
    textAccount: {
        fontSize: 18,
        color: '#2CF4B8',
        marginTop: height/60,
        marginLeft: width/20,
    },
    viewBtn: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height/30,
        marginBottom: height/15.5,
        paddingLeft: 20
    },
    btnSign: {
        width: width/2.1,
        paddingRight: 10,
    },
    textTotal: {
        fontSize: 20,
        color: '#fff'
    },
    textCurrency: {
        paddingTop: 10,
        fontSize: 35,
        color: '#fff'
    },
    viewContent: {
        marginBottom: height/105
    },
    modalView: {
        marginTop: 550,      
      //   margin: 10,
        backgroundColor: '#2B2E39',
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#2B2E39",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2B2E39",
      marginTop: 40,
      paddingBottom: 10
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 25
    },
    modalText: {
      marginBottom: 25,
      textAlign: "center",
      color: '#fff',
      fontSize: 25
    },    
})

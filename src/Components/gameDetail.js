import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Modal, Pressable } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux'
import { Button, Icon } from "react-native-elements";
import gameActions from '../Redux/Actions/gameActions';
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get('screen')

const gameDetail = ({ route, getGame, oneUser, saveStorage }) => {
    const { idGame } = route.params;
    const [game, setGame] = useState({})
    const [modalVisible, setModalVisible] = useState(false);
    const [ctrlBoton, setCtrlBoton] = useState(true);
    const [amountGame, setAmountGame] = useState(1);
    const [key, setKey] = useState('games');
    const navigation = useNavigation();

    useEffect(() => {
        getGame(idGame)
        .then((res) => {
            setGame(res.response.res);
        })
        .catch((err) => console.log(err));
        handleIdGame(idGame)
    }, [idGame])

    const handleBuy = () => {
      (Object.keys(oneUser).length === 0) ? setModalVisible(true) : navigation.navigate('checkout')
    }

    const handleRegister = () => {
      setModalVisible(!modalVisible)
      navigation.navigate('signin')
    }

    const handleSaveStorage = () => {
      saveStorage(key, amountGame, idGame, game)
      setCtrlBoton(false)
    }

    const handleIdGame = async (idGame)  =>  { 
      const result = await AsyncStorage.getItem(key)
      let games = [];
      if(result !== null) games = JSON.parse(result)
      games.map((elem) => {
          if(elem.id === idGame){
                setCtrlBoton(false)
                return
          }       
      })
    }
// console.log(game)
    return (
       game &&
        <ImageBackground
          source={{ uri: game.background_image_additional }}
          style={styles.imglogo}
          opacity={0.1}
        >
          <View style={styles.container}>  
            <View style={styles.viewContainerA}>
                <View style={styles.viewImg}>
                    <Image
                        source={{uri: game.background_image}}
                        style={styles.imgGame}
                        />                   
                </View>
                <View style={styles.viewDesc}>
                    <Text style={styles.textName}>{ game.name }</Text>
                    <Text style={styles.textReleased}>Released : </Text>
                    <Text style={styles.textGame}>{ game.released }</Text>
                    <Text style={styles.textReleased}>Rating : </Text>
                    <Text style={styles.textName}>{ game.rating_top }</Text>
                </View>
            </View>
            <View style={styles.viewContainerB}>
                <View>
                    <Text style={styles.textWeb}>{ game.website }</Text>
                    <Text style={styles.textPrice}>Price: { game.price }</Text>
                </View>
                <View style={styles.viewBtn}>
                    <Button
                        title="Buy now"
                        containerStyle={styles.btnentrar}
                        buttonStyle={{ backgroundColor: '#AF3181' }}
                        onPress={() => handleBuy()}
                        titleStyle={{ fontSize: 22 }}
                    />
                    {ctrlBoton ?
                    <Button
                        icon={{name: 'cart-outline', type: 'material-community', color: '#fff'}} 
                        containerStyle={styles.btnAccount}
                        buttonStyle={{ backgroundColor: "#2B2E39" }}
                        onPress={() => handleSaveStorage()}
                        titleStyle={{ fontSize: 22 }}
                    /> : 
                    <View style={styles.viewBtnCart}>
                        <Icon type="material-community" name={'cart-outline'} size={28} color={'#4f7768'} style={{marginTop: 9}} />
                    </View>                 
                    }
                </View>            
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
        </ImageBackground>
    )
}
const mapDispatchToProps = {
    getGame: gameActions.getGame, 
    saveStorage: gameActions.saveAsyncStorage
  }
const mapStateToProps = (state) =>{
    return { oneUser: state.authReducer.oneUser, }
}
export default connect(mapStateToProps, mapDispatchToProps)(gameDetail)

const styles = StyleSheet.create({
    imglogo: {
        width: width,
        height: height,
         backgroundColor: '#111111'
     },
     container: {
        height: height/20
     }, 
     viewContainerA: {
         flex:1,
         flexDirection: 'row',
         marginTop: height/20,
     },
     viewImg: {
        width: width/2.3,
        marginLeft: width/21,
     },
     imgGame: {
         width: width/2.5,
         height: height/3,
         backgroundColor: '#2B2E39',
     },
     viewDesc: {
        width: width/2,
        height: height/2.8,
     },
     textName: {
         fontSize: 26,
         color: '#fff',
         textShadowOffset: {width: 2, height: 2},
         textShadowRadius: 10,
         textShadowColor: '#050404',
     },
     textReleased: {
        fontSize: 20,
        color: '#fff',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10,
        textShadowColor: '#050404',
        marginTop: height/30,
     },
     textGame: {
        fontSize: 18,
        color: '#fff',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10,
        textShadowColor: '#050404',
     },
     viewContainerB: {
        flexDirection: 'column'
     },
     textWeb: {
        fontSize: 20,
        color: '#fff',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10,
        textShadowColor: '#050404',
        marginTop: height/2.8,
        textAlign: 'center'
     },
     textPrice: {
        fontSize: 30,
        color: '#2CF4B8',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10,
        textShadowColor: '#050404',
        marginTop: height/35,
        textAlign: 'center',
     },
     viewBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height/30,
     },
     btnentrar: {
         width: width-150,
     },
     btnAccount: {
        width: width-340,
        height: height/19,
         marginLeft: height/40,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#2DF2B8',
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
  viewBtnCart: {
    width: width-340,
    height: height/18.8,
    marginLeft: height/40,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#4f7768',
  }
})

import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Modal, Pressable } from 'react-native'
import { Button } from "react-native-elements";
import { connect } from 'react-redux'
import gameActions from '../Redux/Actions/gameActions';
const { width, height } = Dimensions.get('screen')

const gameDetail = ({ route, getGame }) => {
    const { idGame } = route.params;
    const [game, setGame] = useState({})
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        getGame(idGame)
        .then((res) => {
            setGame(res.response.res);
        })
        .catch((err) => console.log(err));
    }, [])

    const handleBuy = () => {
        console.log('holiiiii')
        // setModalVisible(true)
    }

    return (
       game &&
        <ImageBackground
          source={{ uri: game.background_image_additional }}
          style={styles.imglogo}
          opacity={0.2}
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
                <Button
                    icon={{name: 'cart-outline', type: 'material-community'}} 
                    containerStyle={styles.btnAccount}
                    buttonStyle={{ backgroundColor: "#2B2E39" }}
                    onPress={() => navigation.navigate("signup")}
                    titleStyle={{ fontSize: 22 }}
                />                   
            </View>            
         </View>
        {/* <Modal
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
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
                </View>
            </View>
        </Modal> */}
        </ImageBackground>
    )
}
const mapDispatchToProps = {
    getGame: gameActions.getGame, 
  }

export default connect(null, mapDispatchToProps)(gameDetail)

const styles = StyleSheet.create({
    imglogo: {
        width: width,
        height: height,
         backgroundColor: '#2B2E39'
     },
     container: {
        height: height/20
     }, 
     viewContainerA: {
         flex:1,
         flexDirection: 'row',
         marginTop: height/20
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
        marginTop: height/18,
        textAlign: 'center'
     },
     viewBtn: {
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'center',
         textAlign: 'center',
         width: width/1.5,
         marginLeft: width/7,
     },
     btnentrar: {
        width: width-150,
        height: height/12,
        marginTop: height/7,
        marginLeft: height/40
     },
     btnAccount: {
        width: width-340,
        height: height/19,
        marginTop: height/7,
        marginLeft: height/40,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#2DF2B8',
    },

      modalView: {
    marginTop: 550,      
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
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
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})

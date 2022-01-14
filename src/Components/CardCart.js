import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { Icon } from "react-native-elements"

const { width, height } = Dimensions.get('screen')

const CardCart = () => {
    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>
              <Image
                source={require("../../assets/minecraft.png")}
                style={styles.imglogo}
              />
            </View>
            <View style={styles.containerData}>
                <View style={styles.titleAndDelete}>
                    <View style={styles.viewTitle}>
                        <Text style={styles.textGame}>
                            Minecraft: Java Edition (PC) Official Website Key GLOBAL
                        </Text>
                    </View>
                    <View style={styles.viewDelete}>
                        <Icon type="material-community" name={'delete-outline'} size={34} color={'#2CF4B8'} />
                    </View>
                </View>
                <View style={styles.amountPrice}>
                    <View style={styles.viewAmount}>
                        <View style={styles.viewPrice}>
                            <Icon type="material-community" name={'minus-circle-outline'} size={34} color={'#2CF4B8'} />
                            <Text style={styles.textAmount}>1</Text>
                            <Icon type="material-community" name={'plus-circle-outline'} size={34} color={'#2CF4B8'} />
                        </View>
                    </View>
                    <View style={styles.viewAmount}>
                        <Text style={styles.textPrice}>$15.58</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CardCart

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
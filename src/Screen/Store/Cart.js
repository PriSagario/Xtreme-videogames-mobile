import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native'
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import CardCart from '../../Components/CardCart';
import NoCart from '../../Components/NoCart';
import gameActions from '../../Redux/Actions/gameActions';
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('screen')

const Cart = ({ totalGamer }) => {
    // const [render, setRender] = useState(true)
    const navigation = useNavigation();
    
    return (
            <View style={styles.container}>
                <View style={styles.logedUser}>
                <ScrollView>
                { totalGamer &&
                   totalGamer.length != 0 ?
                    totalGamer.map((elem, i) => {
                        //  console.log('elem', elem)
                       return <View style={styles.viewContent} key={i}>
                            <CardCart  data={elem}/>
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
                            <Text style={styles.textCurrency}>$ 00.0</Text>
                        </View>
                        <Button
                            title="Checkout now"
                            containerStyle={styles.btnSign}
                            buttonStyle={{ backgroundColor: '#AF3181' }}
                            onPress={() => navigation.navigate("signin")}
                            titleStyle={{ fontSize: 22 }}
                        />
                     </View>

                </View>            
            </View>
    )
}
  const mapStateToProps = (state) =>{
    return { totalGamer: state.gameReducer.totalGamer, }
}
export default connect(mapStateToProps, null)(Cart)

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
    }    
})

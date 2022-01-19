import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import HorizontalList from '../../Components/HorizontalList'
import { Icon } from "react-native-elements"
import { useNavigation } from "@react-navigation/native";
import HorizontalGames from '../../Components/HorizontalGames';
import { connect } from 'react-redux'
import gameActions from '../../Redux/Actions/gameActions';

 const { width, height } = Dimensions.get('screen')
 const genre = [ "Action", "Adventure", "RPG", "Shooter", "Indie", "Casual", "Sports", "Racing","Puzzle", "Platformer", "Simulation", "Strategy", "Massively Multiplayer"]
 const MyStore = ({getGames }) => {
    const navigation = useNavigation();
    const [allGames, setAllgames] = useState([]) 

    useEffect(() => {
        getGames()
        .then((res) => {
          setAllgames(res.response.res);
        })
        .catch((err) => console.log(err));
    }, [])

    const handlePress = (allGames) => {
        navigation.navigate("search", { dataGames: allGames })
    } 
    // console.log(allGames)
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => handlePress(allGames)}
                >
                    <View style={styles.viewSearch}>
                        <View style={styles.search}>
                        <Icon type="material-community" name={'magnify'} size={34} color={'#2CF4B8'} />
                        <Text  style={styles.textSearch}></Text> 
                        </View>
                    </View>
                </TouchableOpacity>
                <HorizontalList genre={ genre }/>
                <Text style={styles.textTop}>Top games</Text>
                <ScrollView
                horizontal={true}
                >
                    {allGames &&
                        allGames.map((item, i) => {
                            if(item.rating_top === 5 ){
                            return <HorizontalGames key={i} item={ item }/>
                            }    
                        })
                    }
                </ScrollView>
                <Text style={styles.textTop}>Top Tree</Text>
                <ScrollView
                horizontal={true}
                >
                    {allGames &&
                        allGames.map((item, i) => {
                            if(item.rating_top === 1 ){
                            return <HorizontalGames key={i} item={ item }/>
                            }    
                        })
                    }
                </ScrollView>
             </View>
        </ScrollView>
    )
}
const mapDispatchToProps = {
    getGames: gameActions.getAllGames, 
  }

export default connect(null, mapDispatchToProps)(MyStore)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#20222B',
        paddingTop: height/30,
        // height: height
    },
    text: {
        color: '#fff'
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
    textTitle: {
        fontSize: 28,
        color: '#fff',
        marginTop: height/45,
        marginLeft: width/18,
        marginBottom: height/60
    },
    viewSearch: {
       width: width/1.1,
       height: height/18,
       marginLeft: width/19,
       backgroundColor: '#343744',
       paddingLeft: width/20
    },
    textSearch: {
        fontSize: 24,
        color: '#2CF4B8',
    },
    search: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textTop: {
        fontSize: 25,
        color: '#fff',
        marginTop: height/55,
        marginLeft: width/10,
        marginBottom: height/20,
     },
})


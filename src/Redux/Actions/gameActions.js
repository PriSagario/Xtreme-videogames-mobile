import  axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const gameActions = {
    getGame: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get('http://192.168.43.143:4000/api/game/'+id)
            // console.log('desde actions:', res.data) 
            return {success:true , error:null, response: res.data}
        }
    },
    getAllGames: () =>{
        return async (dispatch, getState) => {
            const res = await axios.get('http://192.168.43.143:4000/api/allgames')
            // console.log('desde actions:', res.data) 
            dispatch({type:'allGamers', payload: res})
            return {success:true , error:null, response: res.data}
        }
    },
    getGameByGenre: (genre) =>{
        // console.log('desde actions gnre:', typeof genre)
        return async (dispatch, getState) => {
            const res = await axios.get('http://192.168.43.143:4000/api/gameByGenre/'+genre)
            // console.log('desde actions:', res) 
            return {success:true , error:null, response: res}
        }
    },
    getGameTop: (top) =>{
        // console.log('desde actions gnre:', typeof genre)
        return async (dispatch, getState) => {
            const res = await axios.get('http://192.168.43.143:4000/api/gameTop/'+top)
            // console.log('desde actions:', res) 
            return {success:true , error:null, response: res}
        }
    },
    filterGames: (games, value) => {
        return (dispatch, getState) => {
            // console.log(cities, value)
             const filterGames = games.filter((game => game.name.toLowerCase().startsWith(value.trim().toLowerCase())))
             dispatch({type:'filter', payload: filterGames})
         }        
    },
    saveAsyncStorage: (key, amountGame, idGame, game) => { 
        return async (dispatch, getState) => {
            const newData = { id: idGame, amount: amountGame, image: game.background_image, name: game.name, price: game.price, subtotal: game.price }
            const result = await AsyncStorage.getItem(key)
            let games = [];
            if(result !== null) games = JSON.parse(result)
            games.push(newData)
            await AsyncStorage.setItem(key, JSON.stringify(games))
           
            //  await AsyncStorage.removeItem(key);
            const data = [{ id: idGame, amount: amountGame, image: game.background_image, name: game.name, price: game.price, subtotal: game.price }]
            if(result == null)  await AsyncStorage.setItem(key, JSON.stringify(data)) 
            const res = await AsyncStorage.getItem(key)
            const totalCart = JSON.parse(res)
            // console.log('totalCart', totalCart) 
            dispatch({type:'gamesCart', payload: totalCart})
        }
    },
    getAsyncStorage: () => { 
        return async (dispatch, getState) => {
            try{
                const res = await AsyncStorage.getItem('games')
                const dataStorage = JSON.parse(res)
                return {success:true , error:null, response: dataStorage}
            }catch(err){
                return error
            }
        } 
    },
    uploadAsyncStorage: (newData) => {
        return async (dispatch, getState) => {
            try{
                await AsyncStorage.setItem('games', JSON.stringify(newData)) 
                const res = await AsyncStorage.getItem('games')
                const dataStorage = JSON.parse(res)
                // console.log('uploadAsinc-dataStorage', dataStorage);
                dispatch({type:'gamesCart', payload: dataStorage})               
            }catch(err){
                return error
            }
        }
    }      
}
export default gameActions
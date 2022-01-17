import  axios from 'axios';


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
    }     
}
export default gameActions
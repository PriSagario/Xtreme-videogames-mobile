import  axios from 'axios';


const gameActions = {
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
    }  
}
export default gameActions
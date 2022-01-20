const initialState = {
    dataGamer: [], 
    totalGamer: [],
    totalBuy: 0
 }

const gameReducer = (state = initialState, action) => {
    switch(action.type){
        case 'allGamers':
            return {
                ...state,
                dataGamer: action.payload
            }
        case 'filter':
            return {
                ...state,
                dataGamer: action.payload
            }
        case 'gamesCart':
            return {
                ...state,
                totalGamer: action.payload
            }      
        case 'totalBuy':
            return {
                ...state,
                totalBuy: action.payload 
            }  
        default:
            return state
    }
}
export default gameReducer 
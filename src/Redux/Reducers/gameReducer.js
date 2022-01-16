const initialState = {
    dataGamer: [], 
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
        default:
            return state
    }
}
export default gameReducer
const initialState = {
    user: [], //se llama en mapStateToProps 
    oneUser:[],
    userPersistent: [],
    likes: []
}

const authReducer = (state = initialState, action) => {
    // console.log(action.payload)
    switch(action.type){
        case 'user':
            return {
                ...state,
                user: action.payload
            }
        case 'oneUser':
            // localStorage.setItem('name', res.data.response.token)
            return {
                ...state,
                oneUser: action.payload
            }
        case 'oneUserPersistent':
            return {
                ...state,
                userPersistent: action.payload
            }
        case 'logout':
            localStorage.removeItem('token');
            return initialState
        default:
            return state
    }
}
export default authReducer
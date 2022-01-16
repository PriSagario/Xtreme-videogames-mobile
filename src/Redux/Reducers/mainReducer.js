import { combineReducers } from 'redux'
import authReducer from './authReducer';
import gameReducer from './gameReducer';

const mainReducer = combineReducers ({
 
    authReducer,
    gameReducer

    
})

export default mainReducer
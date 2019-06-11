import { SET_SETTINGS } from '../actions/types';

const initialState = {
    theme: '#67eaca',
    newsCount: 20,
    fontSize: 16,
}

export default function(state = initialState, action) {
    switch(action.type){
        case SET_SETTINGS:
            return {
                ...state,
               theme: action.payload.theme,
               newsCount: action.payload.newsCount,
               fontSize: action.payload.fontSize 
            }
        default:
            return state
    }
}
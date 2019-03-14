import {BEGIN_USER, ADD_USER, FAILED_USER, SUCCESS_USER,CHANGE_THEME} from './usersType';

const initialState = {
    users: [],
    loading:false,
    error:null,
    theme:false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case BEGIN_USER:
            return {
                ...state,
                loading: true,
                error: null
            }
        case SUCCESS_USER:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case FAILED_USER:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CHANGE_THEME:
            return{
                theme:action.payload
            }
        default:
            return state
    }
}

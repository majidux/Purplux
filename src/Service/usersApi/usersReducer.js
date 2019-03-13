import {BEGIN_USER, ADD_USER, FAILED_USER, SUCCESS_USER} from './usersType';

const initialState = {
    users: [],
    loading:false,
    error:null
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
        default:
            return state
    }
}

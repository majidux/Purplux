import {BEGIN_USER, ADD_USER, FAILED_USER, SUCCESS_USER,CHANGE_THEME} from './usersType';
import {themes} from "../../Component/themes-context";

const initialState = {
    users: [],
    loading:false,
    error:null,
    theme:themes.light,
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
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }
        default:
            return state
    }
}

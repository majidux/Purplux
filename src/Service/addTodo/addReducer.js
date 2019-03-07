import {ADD_TODO} from "./addType";

const initialState = {
    todo: []
};

export const addReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:{
            return{
                ...state,
                todo:[...state.todo , action.payload]
            }
        }
        default :
            return state;
    }
};

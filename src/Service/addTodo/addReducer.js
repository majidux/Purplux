import {ADD_TODO} from "./addType";

const initialState = {
    todo: [
        {
            name:'',
            username:''
        }
    ]
};

export const addReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:{
            return{
                ...state,
                todoData:[...state.todoData , action.payload]
            }
        }
        default :
            return state;
    }
};

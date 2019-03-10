import {GET_BEGIN,GET_SUCCESS,GET_FAILED,ADD_TODO,DELETE_TODO} from "./fetchType";

const initialState = {
    todoData:[],
    loading:false,
    error:null
};
export const fetchReducer =(state=initialState, action)=> {
    switch (action.type) {
        case GET_BEGIN:{
            return{
                ...state,
                loading:true,
                error:null
            }
        }
        case GET_SUCCESS:{
            return{
                ...state,
                loading:false,
                todoData: action.payload
            }
        }
        case GET_FAILED:{
            return{
                ...state,
                loading:false,
                todoData:[],
                error:action.payload
            }
        }
        case ADD_TODO:{
            return{
                ...state,
                todoData:[...state.todoData,action.payload]
            }
        }
        case DELETE_TODO :{
            
            let itemIndex = state.todoData.findIndex((p => p.id === action.payload));
            
            return{
                ...state,
                todoData : [
                    ...state.todoData.slice(0,itemIndex),
                    ...state.todoData.slice(itemIndex + 1),
                ]
            }
        }
        default:
            return state;
    }
};

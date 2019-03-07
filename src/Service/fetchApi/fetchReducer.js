import {GET_BEGIN,GET_SUCCESS,GET_FAILED} from "./fetchType";

const initialState = {
    todoData:[],
    loading:false,
    error:null
};
export const fetchReducer =(state=initialState, action)=>{
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
        default:
            return state;
    }
};

import {
    GET_BEGIN,
    GET_SUCCESS,
    GET_FAILED,
    ADD_TODO,
    DELETE_TODO,
    CHANGE_STATUS,
    FAILED,
    GET_FAILED_DATA, GET_DONE_DATA
} from "./fetchType";

const initialState = {
    todoData: [],
    doneItem: [],
    failedData: [],
    loading: false,
    error: null,
    
};
export const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BEGIN: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        
        case GET_SUCCESS: {
            let filteredUnfinished = action.payload.filter((item) => (!item.isComplete && item.isFail));
            return {
                ...state,
                loading: false,
                todoData: filteredUnfinished
            }
        }
        
        case GET_DONE_DATA:
            let filteredDoneData = action.payload.filter((item) => (item.isComplete && item.isFail));
            return {
                ...state,
                loading: false,
                doneItem: filteredDoneData
            };
        
        case GET_FAILED_DATA: {
            let filteredFailedData = action.payload.filter((item) => (!item.isComplete && !item.isFail));
            return {
                ...state,
                loading: false,
                failedData: filteredFailedData
            }
        }
        case GET_FAILED: {
            return {
                ...state,
                loading: false,
                todoData: [],
                error: action.payload
            }
        }
        case ADD_TODO: {
            return {
                ...state,
                todoData: [...state.todoData, action.payload]
            }
        }
        case DELETE_TODO : {
            let itemIndex = state.todoData.findIndex((p => p.id === action.payload));
            return {
                ...state,
                todoData: [
                    ...state.todoData.slice(0, itemIndex),
                    ...state.todoData.slice(itemIndex + 1),
                ]
            }
        }
        case CHANGE_STATUS: {
            
            let itemIndex = state.todoData.findIndex((p => p.id === action.payload));
            let item = state.todoData[itemIndex];
            
            return {
                ...state,
                todoData: [
                    ...state.todoData.slice(0, itemIndex),
                    //this part used for one array {...item, isComplete: true},
                    ...state.todoData.slice(itemIndex + 1),
                ],
                doneItem: [...state.doneItem, item]
            }
        }
        case FAILED: {
            
            let itemIndex = state.todoData.findIndex((p => p.id === action.payload));
            let item = state.todoData[itemIndex];
            
            return {
                ...state,
                todoData: [
                    ...state.todoData.slice(0, itemIndex),
                    //this part used for one array {...item, isFail: false},
                    ...state.todoData.slice(itemIndex + 1),
                ],
                failedData:[...state.failedData,item]
            }
        }
        default:
            return state;
    }
};

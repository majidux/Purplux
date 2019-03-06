import {combineReducers} from "redux";
import * as getReducer from './fetchApi/fetchReducer';

const rootReducer = combineReducers({
    getDataReducer:getReducer.fetchReducer
});
export default rootReducer;

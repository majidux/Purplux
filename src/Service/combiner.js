import {combineReducers} from "redux";
import * as getReducer from './fetchApi/fetchReducer';
import * as addReducer from "./addTodo/addReducer";

const rootReducer = combineReducers({
    getDataReducer:getReducer.fetchReducer,
    getAddReducer:addReducer.addReducer
});
export default rootReducer;

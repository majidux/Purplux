import {combineReducers} from "redux";
import * as getReducer from './fetchApi/fetchReducer';
import * as usersReducer from "./usersApi/usersReducer";

const rootReducer = combineReducers({
    getDataReducer:getReducer.fetchReducer,
    userReducer:usersReducer.usersReducer
});
export default rootReducer;

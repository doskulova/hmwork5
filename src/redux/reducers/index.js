import {combineReducers} from "redux";
import preloaderReducer from "./preloaderReducer";
import alertReducer from "./alertReducer";
import usersReducer from "./usersReducer";




export const rootReducer = combineReducers({
    preloaderReducer,
    alertReducer,
    usersReducer

})
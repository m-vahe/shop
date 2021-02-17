import {combineReducers} from "redux";
import homeReducer from "../services/reducers/homepage__stable"
const rootReducer = combineReducers({
    navbar:homeReducer
});

export default rootReducer
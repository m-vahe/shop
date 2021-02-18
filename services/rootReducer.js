import {combineReducers} from "redux";
import homeReducer from "../services/reducers/homepage__stable"
import newsletterReducer from "../services/reducers/newsletter"

const rootReducer = combineReducers({
    navbar:homeReducer,
    newsletter:newsletterReducer
});

export default rootReducer
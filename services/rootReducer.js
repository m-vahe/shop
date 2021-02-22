import {combineReducers} from "redux";
import homeReducer from "../services/reducers/homepage__stable"
import newsletterReducer from "../services/reducers/newsletter"
import authReducer from '../services/reducers/auth';

const rootReducer = combineReducers({
    navbar: homeReducer,
    newsletter: newsletterReducer,
    auth: authReducer
});

export default rootReducer;
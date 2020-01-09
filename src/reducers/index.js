import { combineReducers } from "redux";
import UserReducer from './users';

const allReducers = combineReducers({
    user: UserReducer
});
export default allReducers;
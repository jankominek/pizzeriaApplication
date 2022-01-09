import { combineReducers } from "redux";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import { userStateReducer } from "./reducers/userStateReducer";

export const allReducers = combineReducers({
    shoppingCart : shoppingCartReducer,
    userInfo : userStateReducer
})
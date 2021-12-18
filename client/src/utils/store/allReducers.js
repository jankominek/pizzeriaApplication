import { combineReducers } from "redux";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";

export const allReducers = combineReducers({
    shoppingCart : shoppingCartReducer
})
import { combineReducers } from "redux";
import { lastOrderReducer } from "./reducers/LastOrderReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import { userStateReducer } from "./reducers/userStateReducer";

export const allReducers = combineReducers({
    shoppingCart : shoppingCartReducer,
    userInfo : userStateReducer,
    lastOrder : lastOrderReducer
})
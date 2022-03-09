import { combineReducers } from "redux";
import CartReducer from "./CartReducer";

let reducer = combineReducers({
    cartReducer: CartReducer
})

let rootreducer = (state, action) => {
    return reducer(state, action);
}

export default rootreducer;
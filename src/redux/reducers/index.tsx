import { combineReducers } from "redux";
import LoginReducer from "./Login";
import get_customers from "./getCustomers";
import get_doc from "./getCustomer";

const rootReducers =  combineReducers({
    LoginReducer,
    get_customers,
    get_doc
})

export default rootReducers
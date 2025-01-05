import { applyMiddleware, createStore  } from "redux"
import { thunk } from "redux-thunk"

import rootReducers from "./redux/reducers/index"
import { composeWithDevTools } from 'redux-devtools-extension'

const initialEstates  = {}

const middleware = [thunk]

const store = createStore(
    rootReducers,
    initialEstates,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store

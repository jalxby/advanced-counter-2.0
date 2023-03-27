import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type StoreType = typeof store
let store = createStore(rootReducer)
export type StateType = ReturnType<typeof rootReducer>
export default store

import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../hooks/useLocalStorage";

const rootReducer = combineReducers({
    counter: counterReducer
})
const storageState = loadState('state')
const store = createStore(rootReducer, storageState)
store.subscribe(() => {
    saveState(store.getState());
});
export type StateType = ReturnType<typeof rootReducer>
export default store

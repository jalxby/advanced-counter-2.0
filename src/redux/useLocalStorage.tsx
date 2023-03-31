import {StateType} from "./redux-state";
import {log} from "util";

export function loadState(key: string) {
    try {
        const existValue = localStorage.getItem(key)
        if (existValue === null) {
            return undefined
        }
        return JSON.parse(existValue)
    } catch (err) {

    }
}

export const saveState = (state: StateType) => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    } catch {
        console.log('LocalStorage write error!')
    }
};











































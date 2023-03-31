import {StateType} from "../Redux/redux-state";

export function loadState(key: string) {
    try {
        const existValue = localStorage.getItem(key)
        if (existValue === null) {
            return undefined
        }
        return JSON.parse(existValue)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state: StateType) => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    } catch {
        console.log('LocalStorage write error!')
    }
};











































import {Dispatch, useState} from "react";

export type StorageType = {
    startValue: number
    maxValue: number
}

function getValue(key: string, initSettings: StorageType) {
    try {
        let existValue = localStorage.getItem(key)
        if (existValue === null) {
            return initSettings
        }
        return JSON.parse(existValue)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state: StorageType) => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    } catch {
        console.log('LocalStorage write error!')
    }
};

export const useLocalStorage = (initSettings: StorageType): [StorageType, Dispatch<StorageType>] => {
    const [value, setValue] = useState<StorageType>(getValue('state', initSettings))
    saveState(value)
    return [value, setValue]
}








































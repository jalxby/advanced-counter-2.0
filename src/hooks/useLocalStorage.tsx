import {Dispatch, useEffect, useState} from "react";

export type StorageType = {
    startValue: number
    maxValue: number
}

function getValue(key: string, initSettings: StorageType) {
    let existValue = localStorage.getItem(key)
    if (existValue) {
        return JSON.parse(existValue)
    }
    return initSettings
}

export const useLocalStorage = (initSettings: StorageType): [StorageType, Dispatch<StorageType>] => {
    const [value, setValue] = useState<StorageType>(getValue('settings', initSettings))
    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(value))
    }, [value])
    return [value, setValue]
}








































import React, {ChangeEvent} from 'react';
import s from './settings.module.css'
import {StorageType} from "../../hooks/useLocalStorage";

type SettingsType = {
    settingsValue: StorageType
    getSettings: (startValue: number, maxValue: number) => void
    error: string
}

export const Settings = (props: SettingsType) => {

    const dispatchMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        props.getSettings(props.settingsValue.startValue, Number(event.currentTarget.value))
    }

    const dispatchStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        props.getSettings(Number(event.currentTarget.value), props.settingsValue.maxValue)
    }

    const inputClassName = `${props.error ? s.error : ''}`

    return (
        <div className={s.settings}>
            <div>maxValue:<input className={inputClassName}
                                 value={props.settingsValue.maxValue}
                                 onChange={dispatchMaxValue}
                                 type={'number'}/></div>
            <div>start value:<input className={inputClassName}
                                    value={props.settingsValue.startValue}
                                    onChange={dispatchStartValue}
                                    type={'number'}/>
            </div>
        </div>
    );
};


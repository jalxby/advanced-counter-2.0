import React, {ChangeEvent} from 'react';
import s from './settings.module.css'
import {StorageType} from "../../hooks/useLocalStorage";

type SettingsType = {
    changeValueSettings: StorageType
    getSettings: (startValue: number, maxValue: number) => void
    error: string
}

export const Settings = (props: SettingsType) => {

    const dispatchMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        props.getSettings(props.changeValueSettings.startValue, Number(event.currentTarget.value))
    }

    const dispatchStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        props.getSettings(Number(event.currentTarget.value), props.changeValueSettings.maxValue)
    }

    const inputClassName = `${props.error ? s.error : ''}`

    return (
        <div className={s.settings}>
            <div>maxValue:<input className={inputClassName}
                                 value={props.changeValueSettings.maxValue}
                                 onChange={dispatchMaxValue}
                                 type={'number'}/></div>
            <div>start value:<input className={inputClassName}
                                    value={props.changeValueSettings.startValue}
                                    onChange={dispatchStartValue}
                                    type={'number'}/>
            </div>
        </div>
    );
};


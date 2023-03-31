import React from 'react';
import s from './App.module.css';
import {SettingsContainer} from "./components/Settings/SettingsContainer";
import {CounterContainer} from "./components/Counter/CounterContainer";
import {AppPropsType} from "./AppContainer";


export function App(props: AppPropsType) {
    const currentWindow =
        props.isToggled
            ? <SettingsContainer/>
            : <CounterContainer/>
    return (
        <div className={s.wrapper}>
            {currentWindow}
        </div>
    );
}


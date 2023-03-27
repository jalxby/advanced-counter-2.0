import React from 'react';
import s from './App.module.css';
import {Button} from './components/Button/Button';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {useLocalStorage} from "./hooks/useLocalStorage";
import {StateType} from "./Redux/redux-state";
import {changeSettingsValueAC, incrementAC, setCountAC, setErrorAC, toggleSettingsAC} from "./Redux/counter-reducer";
import {Dispatch} from "redux";

type AppPropsType = {
    state: StateType
    dispatch: Dispatch
}

export function App({state, dispatch}: AppPropsType) {
    // console.log('app rendering')
    // const init = {
    //     startValue: state.counter.startValue,
    //     maxValue: state.counter.maxValue
    // }
    // const [lsSettings, setLsSettings] = useLocalStorage(init)
    const error = state.counter.error
    const count = state.counter.count
    const isDisabledInc = count === state.counter.maxValue
    const isDisabledReset = count === lsSettings.startValue

    const increment = () => count !== lsSettings.maxValue && dispatch(incrementAC())
    const reset = () => dispatch(setCountAC(lsSettings.startValue))

    const getSettings = (startValue: number, maxValue: number) => {
        dispatch(changeSettingsValueAC(startValue, maxValue))
        if (startValue < 0 || maxValue < 0) {
            dispatch(setErrorAC('values can\'t be negative!'))
        } else if (startValue === maxValue) {
            dispatch(setErrorAC('values can\'t be equal!'))
        } else if (startValue > maxValue) {
            dispatch(setErrorAC('startValue can\'t be more than maxValue'))
        } else {
            dispatch(setErrorAC(''))
        }
    }

    const applySettingsCallback = () => {
        setLsSettings(state.counter.settingsValue)
        dispatch(setErrorAC(''))
        dispatch(setCountAC(state.counter.settingsValue.startValue))
        dispatch(toggleSettingsAC())
    }

    const toggleSettings = () => {
        dispatch(toggleSettingsAC())
    }

    const applyDisabled = !!error
    const incDisabled = error ? true : isDisabledInc
    const resDisabled = error ? true : isDisabledReset
    const resetLS = () => localStorage.clear()


    return (
        <>
            <button onClick={resetLS}>LS clear</button>
            <div className={s.wrapper}>
                <div>{localStorage.getItem('state')}</div>
                {
                    state.counter.toggleSettings
                        ? (
                            <div className={s.stand}>
                                <div className={s.desktop}>
                                    <Settings getSettings={getSettings} changeValueSettings={state.counter.settingsValue}
                                              error={error}/>
                                </div>
                                <div className={s.buttons}>
                                    <Button title={'apply'} callback={applySettingsCallback} disabled={applyDisabled}/>
                                </div>
                            </div>
                        )
                        : (
                            <div className={s.stand}>
                                <div className={s.desktop}>
                                    <Counter count={error ? error : count} error={isDisabledInc}/>
                                </div>
                                <div className={s.buttons}>
                                    <Button title={'inc'} callback={increment} disabled={incDisabled}/>
                                    <Button title={'res'} callback={reset} disabled={resDisabled}/>
                                    <Button title={'set'} callback={toggleSettings} disabled={false}/>
                                </div>
                            </div>
                        )
                }
            </div>
        </>
    );
}


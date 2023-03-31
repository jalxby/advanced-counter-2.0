import React from 'react';
import s from './App.module.css';
import {Button} from './components/Button/Button';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {AppPropsType} from "./AppContainer";


export function App(props: AppPropsType) {

    const error = props.error
    const count = props.count
    const startValue = props.startValue
    const maxValue = props.maxValue
    const currentStartValue = props.settingsValue.startValue
    const isDisabledInc = count === props.maxValue
    const isDisabledReset = count === props.startValue
    const isApplyDisabled = !!error
    const isIncDisabled = error ? true : isDisabledInc
    const isResDisabled = error ? true : isDisabledReset
    const settingsValue = props.settingsValue
    const counterForm = error ? error : count

    const increment = () => count !== maxValue && props.increment()
    const reset = () => props.setCount(startValue)

    const getSettingsFromInput = (startValue: number, maxValue: number) => {
        props.changeSettingsValue(startValue, maxValue)
        if (startValue < 0 || maxValue < 0) {
            props.setError('values can\'t be negative!')
        } else if (startValue === maxValue) {
            props.setError('values can\'t be equal!')
        } else if (startValue > maxValue) {
            props.setError('startValue can\'t be more than maxValue')
        } else {
            props.setError('')
        }
    }

    const applySettingsCallback = () => {
        props.applySettings()
        props.setError('')
        props.setCount(currentStartValue)
        props.toggleSettings()
    }

    const toggleSettingsCallback = () => {
        props.toggleSettings()
    }

    return (
        <>
            <div className={s.wrapper}>
                {
                    props.isToggled
                        ? (
                            <div className={s.stand}>
                                <div className={s.desktop}>
                                    <Settings getSettings={getSettingsFromInput} settingsValue={settingsValue}
                                              error={error}/>
                                </div>
                                <div className={s.buttons}>
                                    <Button title={'apply'} callback={applySettingsCallback} disabled={isApplyDisabled}/>
                                </div>
                            </div>
                        )
                        : (
                            <div className={s.stand}>
                                <div className={s.desktop}>
                                    <Counter count={counterForm} error={isDisabledInc}/>
                                </div>
                                <div className={s.buttons}>
                                    <Button title={'inc'} callback={increment} disabled={isIncDisabled}/>
                                    <Button title={'res'} callback={reset} disabled={isResDisabled}/>
                                    <Button title={'set'} callback={toggleSettingsCallback} disabled={false}/>
                                </div>
                            </div>
                        )
                }
            </div>
        </>
    );
}


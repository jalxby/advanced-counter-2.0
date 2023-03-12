import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Button} from './components/Button/Button';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {useLocalStorage} from "./hooks/useLocalStorage";

export function App() {
    const init = {
        startValue: 0,
        maxValue: 5
    }
    const [settings, setSettings] = useLocalStorage(init)
    const [count, setCount] = useState(settings.startValue)
    const [changeValueSettings, setChangeValueSettings] = useState(settings)
    const [error, setError] = useState<string>('')
    const [showSettings, setShowSettings] = useState<boolean>(false)

    const increment = () => {
        count !== settings.maxValue && setCount(count + 1)
    }
    const reset = () => setCount(settings.startValue)
    const isDisabledInc = count === settings.maxValue
    const isDisabledReset = count === settings.startValue

    const getSettings = (startValue: number, maxValue: number) => {
        setChangeValueSettings({startValue, maxValue})
        if (startValue < 0 || maxValue < 0) {
            setError('values can\'t be negative!')
        } else if (startValue === maxValue) {
            setError('values can\'t be equal!')
        } else if (startValue > maxValue) {
            setError('startValue can\'t be more than maxValue')
        } else {
            setError('')
        }
    }

    const setSettingsCallback = () => {
        setSettings(changeValueSettings)
        setError('')
        setShowSettings(!showSettings)
    }

    const showHideSettings = () => {
        setShowSettings(!showSettings)
    }

    useEffect(() => setCount(settings.startValue), [settings])
    const applyDisabled = !!error
    const incDisabled = error ? true : isDisabledInc
    const resDisabled = error ? true : isDisabledReset
    return (
        <div className={s.wrapper}>
            {
                showSettings
                    ? (
                        <div className={s.stand}>
                            <div className={s.desktop}>
                                <Settings getSettings={getSettings} changeValueSettings={changeValueSettings}
                                          error={error}/>
                            </div>
                            <div className={s.buttons}>
                                <Button title={'apply'} callback={setSettingsCallback} disabled={applyDisabled}/>
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
                                <Button title={'set'} callback={showHideSettings} disabled={false}/>
                            </div>
                        </div>
                    )
            }
        </div>
    );
}


import React from 'react';
import s from "../../App.module.css";
import {CounterPanel} from "./CounterPanel";
import {Button} from "../Button/Button";
import {CounterPropsType} from "./CounterContainer";

export const Counter = (props: CounterPropsType) => {

    const increment = () => props.count !== props.maxValue && props.increment()
    const reset = () => props.setCount(props.startValue)
    const toggleSettingsCallback = () => props.toggleSettings()

    return (
        <div className={s.stand}>
            <div className={s.desktop}>
                <CounterPanel count={props.counterForm} error={props.isDisabledInc}/>
            </div>
            <div className={s.buttons}>
                <Button title={'inc'} callback={increment} disabled={props.isIncDisabled}/>
                <Button title={'res'} callback={reset} disabled={props.isResDisabled}/>
                <Button title={'set'} callback={toggleSettingsCallback} disabled={false}/>
            </div>
        </div>
    );
};

//export default Counter;
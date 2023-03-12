import React, {FC} from 'react';
import s from "./button.module.css"

type ButtonPropsType = {
    title: string
    callback: () => void
    disabled: boolean
}

export const Button: FC<ButtonPropsType> = ({disabled, title, callback, ...props}) => {
    return (
        <button className={s.default} onClick={callback} disabled={disabled}>{title}</button>
    );
};


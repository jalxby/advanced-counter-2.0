import React, {FC} from 'react';
import s from "./counter.module.css"

type DesktopType = {
    count: number | string
    error: boolean
}

export const CounterPanel: FC<DesktopType> = ({count, error}) => {
    const errorClassName = error ? s.overCount : s.counter
    const stringErrorClassName = typeof count === 'string' ? (s.string + ' ' + s.overCount) : s.counter
    const counterClassName = `${stringErrorClassName} ${errorClassName}`
    return (
        <span className={counterClassName}>{count}</span>
    );
};


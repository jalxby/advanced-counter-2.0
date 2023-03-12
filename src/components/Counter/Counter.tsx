import React, {FC} from 'react';
import s from "./counter.module.css"

type DesktopType = {
    count: number | string
    error: boolean
}

export const Counter: FC<DesktopType> = ({count, error}) => {
    const errorClassname = error ? s.overCount : s.counter
    const stringErrorClassname = typeof count === 'string' ? (s.string + ' ' + s.overCount) : s.counter
    return (
        <span className={`${stringErrorClassname} ${errorClassname}`}>{count}</span>
    );
};


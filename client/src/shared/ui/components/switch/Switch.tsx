import React from 'react';
import clsx from "clsx";
import style from './Switch.module.scss'

const Switch = () => {
    return (
        <label className={clsx(style.switch)}>
            <input className={style.input} type={"checkbox"}/>
            <span className={clsx(style.slider, style.round)}></span>
        </label>
    );
};

export default Switch
import React from 'react';
import style from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={style.root}>
            <div className={style.item}></div>
        </div>
    );
};

export default Loader
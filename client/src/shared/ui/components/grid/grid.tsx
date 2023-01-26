import React from 'react';
import clsx from "clsx";
import style from './grid.module.scss'

interface GridProps {
    children?: React.ReactNode | React.ReactNode[];
}

const Grid: React.FC<GridProps> = ({children}): JSX.Element => {
    return (
        <div className={clsx(style.grid)}>
            {children}
        </div>
    );
};

export default Grid;
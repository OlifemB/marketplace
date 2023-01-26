import React from 'react';
import style from './container.module.scss'
import clsx from "clsx";
import {BreakPoints} from "../../types/breakpoints";

export interface ContainerProps {
    children?: React.ReactNode | React.ReactNode[]
    bp?: BreakPoints
}


const Container: React.FC<ContainerProps> = (props) => {
    return (
        <div className={clsx(
            style.container,
        )}>
            {props.children}
        </div>
    );
};

export default Container;
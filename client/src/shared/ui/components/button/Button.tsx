import React from 'react';
import style from "./button.module.scss"

export interface ButtonProps {
    children?: React.ReactNode | React.ReactNode[] | string |string[]
    onClick?: () => any
    props?: any
}

const Button: React.FC<ButtonProps> = ({children, onClick, ...props}) => {
    return (
        <button
            {...props}
            className={style.root}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button
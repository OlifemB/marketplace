import React, {ReactNode} from 'react';
import style from './nav.module.scss'
import clsx from "clsx";

export interface NavProps {
    children?: React.ReactNode | React.ReactNode[]
}

const Nav: React.FC<NavProps> = ({children}): JSX.Element => {
    return (
        <nav className={clsx(style.nav)}>
            {children}
        </nav>
    );
};

export default Nav;
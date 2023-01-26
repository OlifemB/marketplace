import React from 'react';
import Link from "next/link";


export interface MenuItemProps {
    id: string,
    label: string,
    icon: string,
    url: string
}


const MenuItem: React.FC<MenuItemProps> = ({id, label, icon, url}): JSX.Element => {
    return (
        <div className={'menuItem'}>
            <Link href={url}>
                {label}
            </Link>
        </div>
    );
};

export default MenuItem;
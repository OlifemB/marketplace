import React from 'react';
import style from './Search.module.scss'

export interface SearchProps {
    placeholder?: string
    value: string,
    setValue: (e: string) => void
}

const Search: React.FC<SearchProps> = ({placeholder = 'input query...', value, setValue}) => {

    return (
        <input
            type={'search'}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className={style.search}
            placeholder={placeholder}
        />
    );
};

export default Search
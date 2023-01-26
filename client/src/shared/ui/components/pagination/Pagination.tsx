import React from 'react';
import style from './Pagination.module.scss'

export interface PaginationProps {
    pages: number[]
    currentPage: number
    setCurrentPage: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({pages, currentPage, setCurrentPage}) => {
    return (
        <div className={style.pagination} style={{margin: '.5rem 0'}}>
            {
                pages.map((page) =>
                    <div
                        onClick={() => setCurrentPage(page)}
                        className={
                            currentPage === page
                                ? style.current
                                : style.item
                        }
                        key={page}
                    >
                        <div className={style.link}>
                            {page}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Pagination
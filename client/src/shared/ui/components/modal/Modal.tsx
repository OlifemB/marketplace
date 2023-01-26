import React from "react";
import style from "./Modal.module.scss";

export interface ModalProps {
    children: JSX.Element | JSX.Element[] | string | string[]
    isActive: boolean,
    setModalActive: (isActive: boolean) => void
}

const Modal: React.FC<ModalProps> = ({children, isActive, setModalActive}) => {
    return (
        <div className={style.modal + ' ' + isActive ? style.active : ''}
             onClick={() => setModalActive(false)}>

            <div className={style.modalContent}
                 onClick={(e) => e.stopPropagation()}>

                {children}
            </div>

        </div>
    );
};

export default Modal
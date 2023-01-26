import React from "react";
import style from "./Message.module.scss";

export interface MessageProps {
    type: string,
    children: React.ReactNode | React.ReactNode[]
}

const Message: React.FC<MessageProps> = ({type, children}) => {
    return <div className={style.message + ' ' + type}>{children}</div>;
};


export default Message


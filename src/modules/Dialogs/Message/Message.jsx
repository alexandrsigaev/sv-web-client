import css from "./Message.module.css";
import React from "react";

let iter = 1;

const Message = (props) => {
    return (
        <div className={css.message}>
            {props.message + iter++}
        </div>
    );
};

export default Message;
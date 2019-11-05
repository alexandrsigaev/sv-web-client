import React from 'react';
import css from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = '/ms/' + props.id;
    return (
        <div className={css.dialog} id={props.id}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;
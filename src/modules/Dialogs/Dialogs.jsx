import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    const dialogsData = [
            {id: 1, name: 'Petya'},
            {id: 3, name: 'OLya'},
            {id: 4, name: 'Vasya837'},
            {id: 5, name: 'Jora39EtR'},
            {id: 6, name: 'IvanVas'},
        ],
        dialogElements = dialogsData.map(el => <DialogItem id ={el.id} name={el.name}/>);
    return (
        <div className={css.dialogs}>
            <div className={css.dialogs_items}>
                {dialogElements}
            </div>
            <div className={css.dialog_window}>
                <Message message='Hello wrld!'/>
            </div>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={css.message}>
            {props.message}
        </div>
    );
};

const DialogItem = (props) => {
    const path = '/ms/' + props.id;
    return (
        <div className={css.dialog} id={props.id}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default Dialogs;
import React from "react";
import css from './NavigateBar.module.css'
import {NavLink} from "react-router-dom";

const NavigateBar = () => {
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to={'/messages'}>Messages</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to={'/news'}>News</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to={'/music'}>Music</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to={'/settings'}>Settings</NavLink>
            </div>
        </nav>
    )
};

export default NavigateBar;
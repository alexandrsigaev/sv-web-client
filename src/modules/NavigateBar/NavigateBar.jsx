import React from "react";
import css from './NavigateBar.module.css';
import {NavLink} from "react-router-dom";

const NavigateBar = () => {
    return (
        <nav className={css.nav}>
            <div className={css.nav__item}>
                <NavLink to={'/profile'} activeClassName={css.active}>Profile</NavLink>
            </div>
            <div className={css.nav__item}>
                <NavLink to={'/ms'} activeClassName={css.active}>Messages</NavLink>
            </div>
            <div className={css.nav__item}>
                <NavLink to={'/news'} activeClassName={css.active}>News</NavLink>
            </div>
            <div className={css.nav__item}>
                <NavLink to={'/music'} activeClassName={css.active}>Music</NavLink>
            </div>
            <div className={css.nav__item}>
                <NavLink to={'/settings'} activeClassName={css.active}>Settings</NavLink>
            </div>
        </nav>
    )
};

export default NavigateBar;
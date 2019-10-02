import React from "react";
import css from'./NavigateBar.module.css'

const NavigateBar = () => {
    return (
        <nav className={css.nav}>
            <div className={css.item}><a href={'#profile'}>Profile</a></div>
            <div className={css.item}><a href={'#messages'}>Messages</a></div>
            <div className={css.item}><a href={'#news'}>News</a></div>
            <div className={css.item}><a href={'#music'}>Music</a></div>
            <div className={css.item}><a href={'#settings'}>Settings</a></div>
        </nav>
    )
};

export default NavigateBar;
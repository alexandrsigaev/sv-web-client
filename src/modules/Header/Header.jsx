import React from "react";
import css from './Header.module.css'

const Header = () => {
    return(
          <header className={css.header}>
              <img src={'logo_200x200.png'} alt={'logo'}/>
          </header>
    );
};

export default Header;
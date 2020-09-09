import React from 'react';
import Logo from './logo';

import styles from './styles/nav.module.scss';
import NavbarItem from './navbarItem'; 

const Navbar = () => {
    return <nav className={styles["nav"]}>
        <Logo className={styles["nav__logo"]} />
        <div className={styles["nav__items"]}>
            <NavbarItem to="/">All events</NavbarItem>
            <NavbarItem to="/myevents">My events</NavbarItem>
            <NavbarItem to="/about">About</NavbarItem>
        </div>
    </nav>
}

export default Navbar;
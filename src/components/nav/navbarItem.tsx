import React, { FunctionComponent } from 'react'
import { Link, NavLink } from 'react-router-dom';
import styles from './styles/nav.module.scss';


interface NavbarItemProps {
    to: string
}

const NavbarItem: FunctionComponent<NavbarItemProps> = ({ to, children }) => {
    return <Link className={styles["nav__item"]} to={to}>{children}</Link>
}

export default NavbarItem;
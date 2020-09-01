import React, { FunctionComponent } from 'react';
import cs from 'classnames';
import styles from './sidebar.module.scss';

interface SidebarProps extends React.HTMLAttributes<HTMLElement>{
    side: "left" | "right"
}

const Sidebar: FunctionComponent<SidebarProps> = ({ children, ...props }) => {
    return <aside className={cs(styles["sidebar"], styles[`sidebar--${props.side}`], props.className)}>
        {children}
    </aside>
}

export default Sidebar;
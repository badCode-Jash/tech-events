import React, { FunctionComponent } from 'react';
import cs from 'classnames';
import styles from './content.module.scss';

const Content: FunctionComponent<React.HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {
    return <div className={cs(styles["content"], props.className)}>
        {children}
    </div>
}

export default Content;
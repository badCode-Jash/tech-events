import React, { FunctionComponent } from 'react';
import cs from 'classnames';
import styles from './badge.module.scss';

const Badge: FunctionComponent<React.HTMLProps<HTMLElement>> = ({ className }) => {
    return <div className={cs(styles["badge"], className)}>
        <span>
            FREE
        </span>
    </div>
}

export default Badge;
import React, { FunctionComponent } from 'react'
import styles from './default.module.scss'

const DefaultLayout: FunctionComponent = ({ children }) => {
    return (
        <div className={styles['default']}>
            {children}
        </div>
    );
}

export default DefaultLayout;
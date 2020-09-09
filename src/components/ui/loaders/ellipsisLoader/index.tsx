import React from 'react'
import styles from './ellipsisLoader.module.scss'
import cs from 'classnames'

function EllipsisLoader() {
    return <div className={cs(styles['ellipsis-loader'], styles['ellipsis-loader--branded'])}>
        <div className={styles['ellipsis-loader__dot']}></div>
        <div className={styles['ellipsis-loader__dot']}></div>
        <div className={styles['ellipsis-loader__dot']}></div>
    </div>
}

export default EllipsisLoader;
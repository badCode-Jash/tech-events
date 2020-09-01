import React from 'react';
import EllipsisLoader from '../ellipsisLoader';

import styles from './pageLoader.module.scss';

function PageLoader() {
    return <div className={styles['page-loader']}>
        <EllipsisLoader />
        <span className={styles['loader-text']}>Loading</span>
    </div>
}

export default PageLoader;
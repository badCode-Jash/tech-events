import React, { FunctionComponent } from 'react';
import Button from '../../../../components/button/button';
import Badge from '../../../../components/badge';

import styles from './styles/eventItem.module.scss';

const EventItem: FunctionComponent = () => {
    return <div className={styles["event-item"]}>
        <div>
            <div>
                <Badge />
                <span className={styles["event-item__title"]}>Css grids: Fact or fiction</span>
            </div>
            <div>
                <Button type="primary">Sign up</Button>
            </div>
        </div>
        <div>
            <span>🗺️ Barcelona</span>
            <span>⌛ 60'</span>
            <span>⏰ from 14:00 to 15:00</span>
        </div>
    </div>
}

export default EventItem;
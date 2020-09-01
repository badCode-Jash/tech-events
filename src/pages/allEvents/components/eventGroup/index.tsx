import React, { FunctionComponent } from 'react';
import styles from './styles/eventItem.module.scss';
import Badge from '../../../../components/badge';
import Button from '../../../../components/button/button';
import EventItem from './eventItem';

const EventGroup: FunctionComponent = () => {
    return <div className={styles["event-group"]}>
                <div className={styles["event-group__date-header"]}>
                    <span>
                        Sunday 14th July
                    </span>
                </div>
                <EventItem />
    </div>
}

export default EventGroup;
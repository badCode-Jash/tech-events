import React, { FunctionComponent } from 'react';
import styles from './styles/eventItem.module.scss';
import Badge from '../../../../components/badge';
import Button from '../../../../components/button/button';
import EventItem from './eventItem';
import { CEvent } from '../../../../models';
import { formatEventDate } from '../../../../utils/datetime';

interface EventGroupProps {
    eventGroup: {
        startDate: string;
        events: CEvent[];
    }
}

const EventGroup: FunctionComponent<EventGroupProps> = ({ eventGroup }) => {
    return <div className={styles["event-group"]}>
        <div className={styles["event-group__date-header"]}>
            <span>
                {formatEventDate(new Date(eventGroup.startDate))}
            </span>
        </div>
        {eventGroup.events.map((event: CEvent) => <EventItem event={event} />)}
    </div>
}

export default EventGroup;
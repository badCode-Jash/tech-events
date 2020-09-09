import React, { FunctionComponent } from 'react';
import styles from './styles/eventItem.module.scss';
import Badge from '../../../components/ui/badge';
import Button from '../../../components/ui/button/button';
import EventItem from './eventItem';
import { CEvent } from '../../../models';
import { formatEventDate } from '../../../utils/datetime';
import { Transition, TransitionGroup } from "react-transition-group";
import cs from 'classnames';

interface EventGroupProps {
    eventGroup: {
        startDate: Date;
        events: CEvent[];
    },
    index: number,
    signUpEvent: (eventId: number) => void,
    cancelEvent: (eventId: number) => void
}

const EventGroup: FunctionComponent<EventGroupProps> = ({ eventGroup, signUpEvent, cancelEvent, index }) => {
    return <div className={styles["event-group"]}>
        <div className={styles["event-group__date-header"]}>
            <span>
                {formatEventDate(eventGroup.startDate)}
            </span>
        </div>
        {eventGroup.events.map((event: CEvent, index) => <EventItem
            key={eventItemKeyExtractor(event.$id, index)}
            onSignUpButtonClicked={signUpEvent}
            onCancelButtonClicked={cancelEvent}
            event={event}
        />)}
    </div>
}

const eventItemKeyExtractor = (eventId: number, index: number) => `event-item-${eventId}-${index}`

export default EventGroup;
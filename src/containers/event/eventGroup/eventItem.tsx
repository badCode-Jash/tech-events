import React, { FunctionComponent } from 'react';
import Button from '../../../components/ui/button/button';
import Badge from '../../../components/ui/badge';

import styles from './styles/eventItem.module.scss';
import { CEvent } from '../../../models';
import { useSelector } from 'react-redux';
import { getCityNameById } from '../../../store/event/selectors';
import { RootState } from 'typesafe-actions';
import { getUser, getUserUpdating } from '../../../store/user/selectors';

interface EventItemProps {
    event: CEvent,
    onSignUpButtonClicked: (eventId: number) => void,
    onCancelButtonClicked: (eventId: number) => void
}

const EventItem: FunctionComponent<EventItemProps> = ({ event, onCancelButtonClicked, onSignUpButtonClicked }) => {
    const cityName = useSelector((state: RootState) => getCityNameById(state, event.$city));
    const user = useSelector(getUser);
    const userUpdating = useSelector(getUserUpdating);

    let signedUpForTheEvent = user?.isEventSigned(event.$id);

    const _onSignUpButtonClicked = () => {
        onSignUpButtonClicked(event.$id);
    }

    const _onCancelButtonClicked = () => {
        onCancelButtonClicked(event.$id);
    }

    return <div className={styles["event-item"]}>
        <div>
            <div>
                {event.$isFree && <div className={styles["event-item__badge-container"]}><Badge /></div>}
                <span className={styles["event-item__title"]}>{event.$name}</span>
            </div>
            <div>
                {!signedUpForTheEvent && <Button
                    disabled={userUpdating}
                    onClick={_onSignUpButtonClicked}
                    type="primary">
                    Sign up
                </Button>}

                {signedUpForTheEvent && <Button
                    disabled={userUpdating}
                    onClick={_onCancelButtonClicked}
                    type="danger">
                    Cancel event
                </Button>}
            </div>
        </div>
        <div>
            <span><span role="img" aria-label="World map">🗺️</span> {cityName}</span>
            <span><span role="img" aria-label="Sand clock">⌛</span> {event.$duration}'</span>
            <span><span role="img" aria-label="Alarm clock">⏰</span> {event.$formattedEventHours}</span>
        </div>
    </div>
}

export default EventItem;
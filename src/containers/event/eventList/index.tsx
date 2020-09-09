import React, { FunctionComponent, useState } from "react";
import styles from './eventList.module.scss';
import PageLoader from "../../../components/ui/loaders/pageLoader";
import { CEvent } from "../../../models";
import EventGroup from "../eventGroup";
import Pager from "../../../components/ui/pager";

interface EventListProps {
    isLoading: boolean,
    eventList: {
        startDate: Date;
        events: CEvent[];
    }[],
    allEventCount: number,
    onSignUp: (eventId: number) => void
    onCancel: (eventId: number) => void,
    onPageChanged: (page: number) => void
}

const EventList: FunctionComponent<EventListProps> = ({ isLoading, eventList, allEventCount, onSignUp, onCancel, onPageChanged }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const _onPageChanged = (page: number) => {
        setCurrentPage(page);
        onPageChanged(page);
    }

    function renderInfoMessage() {
        return <>{!eventList.length && !isLoading && <span className={styles["info"]}>No record found</span>}</>
    }

    function renderEventGroup() {
        return <>
            {eventList.map((item, index) => {
                return <EventGroup
                    key={eventGroupKeyExtractor(index)}
                    index={index}
                    signUpEvent={onSignUp}
                    cancelEvent={onCancel}
                    eventGroup={item}
                />
            })}
        </>
    }

    function renderPageLoader() {
        return <>{isLoading && <PageLoader />}</>
    }

    return <>
        {renderPageLoader()}
        <div className={styles["container__event-list"]}>
            {renderInfoMessage()}
            {renderEventGroup()}
            <Pager onPageChanged={_onPageChanged} count={allEventCount} currentPage={currentPage} />
        </div>
    </>
}

const eventGroupKeyExtractor = (index: number) => `event-group-${index}`;

export default EventList;

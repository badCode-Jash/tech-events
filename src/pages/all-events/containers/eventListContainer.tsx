import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllEventsAction } from '../../../store/event/actions';
import { getAllGroupedEvents, getAllEventsCount, getEventsOrCitiesLoading } from '../../../store/event/selectors';
import PageLoader from '../../../components/ui/loaders/pageLoader';
import { signUpEventAction, cancelEventAction } from '../../../store/user/actions';
import { hideModal, showConfirmationModal } from '../../../components/ui/modal';
import EventList from '../../../containers/event/eventList';
import { IFilterData } from '../../../models';

interface EventListContainerProps {
    filterParams: IFilterData
}

const EventListContainer: FunctionComponent<EventListContainerProps> = ({ filterParams }) => {
    const dispatch = useDispatch();
    const eventList = useSelector(getAllGroupedEvents);
    const eventsOrCitiesLoading = useSelector(getEventsOrCitiesLoading);
    const allEventCount = useSelector(getAllEventsCount);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        loadData()
    }, [dispatch, filterParams])

    const signUpEvent = (eventId: number) => {
        showConfirmationModal("Do you want to sign up for this event?", () => {
            dispatch(signUpEventAction(eventId))
            hideModal();
        });
    }

    const cancelEvent = (eventId: number) => {
        dispatch(cancelEventAction(eventId))
    }

    const _onPageChanged = (page: number) => {
        setCurrentPage(page)
        loadData(page);
    };

    const loadData = (page?: number) => {
        dispatch(fetchAllEventsAction({ page: page || currentPage, filterParams }))
    }

    if (!eventList)
        return <PageLoader />

    return <EventList
        allEventCount={allEventCount}
        eventList={eventList}
        isLoading={eventsOrCitiesLoading}
        onCancel={cancelEvent}
        onSignUp={signUpEvent}
        onPageChanged={_onPageChanged}
    />
}

export default EventListContainer;
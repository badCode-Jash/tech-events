import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllEventsAsyncActions } from '../../../store/event/actions';
import { getAllGroupedEvents } from '../../../store/event/selectors';
import PageLoader from '../../../components/loaders/pageLoader';
import { CEvent } from '../../../models';
import EventItem from '../components/event-group/eventItem';
import EventGroup from '../components/event-group';

const EventList: FunctionComponent = () => {
    const dispatch = useDispatch();
    const eventList = useSelector(getAllGroupedEvents);

    useEffect(() => {
        dispatch(fetchAllEventsAsyncActions.request())
    }, []);

    if(!eventList)
        return <PageLoader />

    return <>
        {eventList.map(item => {
            return <EventGroup eventGroup={item}/>
        })}
    </>
}

export default EventList;
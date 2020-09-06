import React from 'react';
import Sidebar from '../../../layouts/sidebar';
import Content from '../../../layouts/content';

import styles from '../styles/allEvents.module.scss';
import Textbox from '../../../components/textbox';
import Checkbox from '../../../components/checkbox';
import Filter from './filter';
import EventItem from '../components/event-group';
import EventList from './eventList';

function AllEvents() {
    return <div className={styles["container"]}>
        <Filter />
        <Content className={styles["container__content"]} >
            <EventList />
        </Content>
    </div>
}

export default AllEvents;
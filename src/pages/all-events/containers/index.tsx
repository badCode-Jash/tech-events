import React, { useState } from 'react';
import Content from '../../../layouts/content';

import styles from '../styles/allEvents.module.scss';
import Filter from '../../../containers/event/filter';
import EventListContainer from './eventListContainer';
import Sidebar from '../../../layouts/sidebar';
import { IFilterData } from '../../../models';
import { useDispatch } from 'react-redux';

function AllEvents() {
    const [filterParams, setFilterParams] = useState<IFilterData>({
        city: "",
        name: "",
        afternoon: false,
        evening: false,
        free: false,
        morning: false,
        night: false
    })
 
    return <div className={styles["container"]}>
        <Sidebar side="left">
            <Filter defaultFilterParams={filterParams} onFilterChanged={setFilterParams} />
        </Sidebar>
        <Content className={styles["container__content"]} >
            <EventListContainer filterParams={filterParams} />
        </Content>
    </div>
}

export default AllEvents;
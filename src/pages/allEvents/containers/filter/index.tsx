import React, { FunctionComponent } from 'react'
import Sidebar from '../../../../layouts/sidebar'
import Textbox from '../../../../components/textbox'
import Checkbox from '../../../../components/checkbox'

import styles from '../../styles/allEvents.module.scss';
import Badge from '../../../../components/badge';

const Filter: FunctionComponent = () => {
    return <Sidebar className={styles["container__sidebar"]} side="left">

        <Textbox placeholder="City"></Textbox>
        <Textbox placeholder="Name"></Textbox>

        <Checkbox className="margin-horizontal-1" id="only-free">
            <span>Only</span>
            <Badge className="margin-vertical-1" />
        </Checkbox>

        <Checkbox id="morning">Morning</Checkbox>
        <Checkbox id="afternoon">Afternoon</Checkbox>
        <Checkbox id="evening">Evening</Checkbox>
        <Checkbox id="night">Night</Checkbox>

    </Sidebar>
}

export default Filter;
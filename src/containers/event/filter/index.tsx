import React, { FunctionComponent, useState, useRef } from 'react'
import Textbox from '../../../components/ui/textbox'
import Checkbox from '../../../components/ui/checkbox'

import Badge from '../../../components/ui/badge';
import { IFilterData } from '../../../models';

interface FilterProps {
    defaultFilterParams: IFilterData,
    onFilterChanged: (filterParams: IFilterData) => void
}

const Filter: FunctionComponent<FilterProps> = ({ onFilterChanged, defaultFilterParams }) => {

    const [filterParams, setFilterParams] = useState(defaultFilterParams);

    const interval = useRef<NodeJS.Timeout>();

    const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isCheckbox = e.target.type === "checkbox";
        const newFilterParams = {
            ...filterParams,
            [e.target.name]: isCheckbox ? e.target.checked : e.target.value
        }
        setFilterParams(newFilterParams);

        if(interval.current)
            clearTimeout(interval.current);

        interval.current = setTimeout(function() {
            onFilterChanged(newFilterParams)
        }, 1000);
    }

    return <>
        <Textbox value={filterParams.city} onChange={_handleChange} name="city" placeholder="City"></Textbox>
        <Textbox value={filterParams.name} onChange={_handleChange} placeholder="Name" name="name"></Textbox>

        <Checkbox checked={filterParams.free} onChange={_handleChange} labelClassName="margin-horizontal-1" id="only-free" name="free">
            <span>Only</span>
            <Badge className="margin-vertical-1" />
        </Checkbox>

        <Checkbox checked={filterParams.morning} onChange={_handleChange} id="morning" name="morning">Morning</Checkbox>
        <Checkbox checked={filterParams.afternoon} onChange={_handleChange} id="afternoon" name="afternoon">Afternoon</Checkbox>
        <Checkbox checked={filterParams.evening} onChange={_handleChange} id="evening" name="evening">Evening</Checkbox>
        <Checkbox checked={filterParams.night} onChange={_handleChange} id="night" name="night">Night</Checkbox>
    </>
}

export default Filter;
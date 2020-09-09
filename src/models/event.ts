import { formatDurationInMinutes, formatEventHours } from "../utils/datetime";
export class CEvent {
    private id: number;
    private isFree: boolean;
    private name: string;
    private city: number; 
    private startDate: Date;
    private endDate: Date;

    public constructor(params: IEventData) {
        this.id = params.id;
        this.isFree = params.isFree;
        this.name = params.name;
        this.city = params.city; 
        this.startDate = new Date(params.startDate);
        this.endDate = new Date(params.endDate);
    }

    get $id() {
        return this.id;
    }

    get $isFree() {
        return this.isFree;
    }

    get $name() {
        return this.name;
    }

    get $city() {
        return this.city;
    } 

    get $startDate() {
        return this.startDate;
    }

    get $endDate() {
        return this.endDate;
    }

    get $duration() { 
        return formatDurationInMinutes(this.startDate, this.endDate);
    }

    get $formattedEventHours() {
        return formatEventHours(this.startDate, this.endDate);
    }
}

export interface IEventData {
    id: number;
    isFree: boolean;
    name: string;
    city: number;
    startDate: Date;
    endDate: Date;
}

export interface IEventsAndCount { 
    events: IEventData[], 
    count: number 
}

export interface IFilterData {
    name?: string,
    city?: string,
    free: boolean,
    morning: boolean,
    afternoon: boolean,
    evening: boolean,
    night: boolean
}
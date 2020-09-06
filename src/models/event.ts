export class CEvent implements IEventData {
    private _id: number;
    private _isFree: boolean;
    private _name: string;
    private _city: number;
    private _startDate: Date;
    private _endDate: Date;

    public constructor(params: IEventData) {
        this._id = params.id;
        this._isFree = params.isFree;
        this._name = params.name;
        this._city = params.city;
        this._startDate = params.startDate;
        this._endDate = params.endDate;
    }

    get id() {
        return this._id;
    }

    get isFree() {
        return this._isFree;
    }

    get name() {
        return this._name;
    }

    get city() {
        return this._city;
    }

    get startDate() {
        return this._startDate;
    }

    get endDate() {
        return this._endDate;
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
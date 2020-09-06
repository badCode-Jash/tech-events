export class CCity implements ICityData {
    private _id: number;
    private _name: string;

    public constructor(params: ICityData) {
        this._id = params.id;
        this._name = params.name;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }
}

export interface ICityData {
    id: number;
    name: string;
}
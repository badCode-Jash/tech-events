export class CCity {
    private id: number;
    private name: string;

    public constructor(params: ICityData) {
        this.id = params.id;
        this.name = params.name;
    }

    get $id() {
        return this.id;
    }

    get $name() {
        return this.name;
    }
}

export interface ICityData {
    id: number;
    name: string;
}
import remove from 'lodash/remove';

export class CUser  {
    private id: number;
    private signedEventIds: Array<number>;

    constructor(params: IUserData) {
        this.id = params.id;
        this.signedEventIds = params.signedEventIds.length > 0
            ? params.signedEventIds 
            : [];
    }

    get $id() {
        return this.id;
    } 

    get $signedEventIds() {
        return this.signedEventIds;
    }

    isEventSigned(eventId: number) {
        return this.signedEventIds.includes(eventId);
    }

    signEvent(eventId: number) {
        if(this.signedEventIds.includes(eventId))
            throw new Error(`User already signed up for this event with id: ${eventId}`)
        this.signedEventIds.push(eventId);
    }

    cancelEvent(eventId: number) {
        remove(this.signedEventIds, (e) => e === eventId)
    }
}

export interface IUserData {
    id: number,
    signedEventIds: number[]
}
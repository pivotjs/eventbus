export interface Callback<T> {
    (data?: T): void;
}
export default class EventBus {
    listeners: {
        [eventId: string]: {
            [listenerId: string]: Callback<any>;
        };
    };
    constructor();
    on<T>(eventId: string, callback: Callback<T>): string;
    off(eventId: string, listenerId: string): void;
    fire<T>(eventId: string, data?: T): void;
}

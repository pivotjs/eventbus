export interface Callback<T> {
    (data?: T): void;
}

export default class EventBus {
    listeners: {
        [eventId: string]: {
            [listenerId: string]: Callback<any>;
        }
    };

    constructor() {
        this.listeners = {};
    }

    on<T>(eventId: string, callback: Callback<T>): string {
        if (this.listeners[eventId] === undefined) {
            this.listeners[eventId] = {};
        }

        let listenerId;
        while (listenerId == null || this.listeners[eventId][listenerId] != null) {
            listenerId = Math.random().toString(36).slice(-12);
        }

        this.listeners[eventId][listenerId] = callback;
        return listenerId;
    }

    off(eventId: string, listenerId: string): void {
        delete this.listeners[eventId][listenerId];
    }

    fire<T>(eventId: string, data?: T): void {
        for (let listenerId in this.listeners[eventId]) {
            const callback = this.listeners[eventId][listenerId];
            callback(data);
        }
    }
}

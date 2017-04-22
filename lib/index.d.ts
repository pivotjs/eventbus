export interface EventCallback<T> {
    (data?: T): void;
}
export declare class EventBus {
    private listeners;
    constructor();
    on<T>(eventId: string, callback: EventCallback<T>): string;
    off(eventId: string, listenerId: string): void;
    fire<T>(eventId: string, data?: T): void;
}

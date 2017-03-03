"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventBus = (function () {
    function EventBus() {
        this.listeners = {};
    }
    EventBus.prototype.on = function (eventId, callback) {
        if (this.listeners[eventId] === undefined) {
            this.listeners[eventId] = {};
        }
        var listenerId;
        while (listenerId == null || this.listeners[eventId][listenerId] != null) {
            listenerId = Math.random().toString(36).slice(-12);
        }
        this.listeners[eventId][listenerId] = callback;
        return listenerId;
    };
    EventBus.prototype.off = function (eventId, listenerId) {
        delete this.listeners[eventId][listenerId];
    };
    EventBus.prototype.fire = function (eventId, data) {
        for (var listenerId in this.listeners[eventId]) {
            var callback = this.listeners[eventId][listenerId];
            callback(data);
        }
    };
    return EventBus;
}());
exports.EventBus = EventBus;

/**
 * EventEmitter
 * This is a simple Event-driven solution for multi-level component communication.
 * I thought it would be very overkill to implement Redux in this specific test.
*/
export const EventEmitter = {
    events: {},
    dispatch(event, data) {
        if (!this.events[event]) return;
        this.events[event].forEach(callback => callback(data));
    },
    subscribe(event, callback) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(callback);
    }
}
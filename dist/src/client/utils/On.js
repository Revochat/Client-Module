"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.On = void 0;
class On {
    static addListener(event, data) {
        let eventData;
        switch (event) {
            // case EventList.Message.Receive:
            //     eventData = data
            //     break;
            default:
                eventData = data;
                break;
        }
    }
}
exports.On = On;

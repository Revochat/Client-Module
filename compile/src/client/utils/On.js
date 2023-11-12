"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.On = void 0;
const EventList_1 = require("./EventList");
class On {
    static addListener(socket, event, fn) {
        switch (event) {
            case EventList_1.EventList.Message.Receive:
                socket.on(event, (data) => {
                    fn(JSON.parse(data));
                });
                break;
            default:
                socket.on(event, (data) => {
                    fn(JSON.parse(data));
                });
                break;
        }
    }
}
exports.On = On;

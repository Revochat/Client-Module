"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageObject = void 0;
const EventList_1 = require("../../utils/EventList");
class MessageObject {
    static send(socket, data, debug = false) {
        return new Promise((resolve, reject) => {
            socket.emit(EventList_1.EventList.Message.Send, data);
            socket.once(EventList_1.EventList.Message.Send, (data) => {
                if (debug)
                    console.log("[DEBUG] MESSAGE SEND: " + data);
                if (data.error)
                    return reject(data.error);
                resolve();
            });
            socket.once("error", (error) => {
                if (debug)
                    console.log("[DEBUG] ERROR: " + error);
                reject(error);
            });
        });
    }
}
exports.MessageObject = MessageObject;

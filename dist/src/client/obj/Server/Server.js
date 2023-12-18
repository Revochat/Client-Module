"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerObject = void 0;
const EventList_1 = require("../../utils/EventList");
class ServerObject {
    static create(socket, data, debug = false) {
        return new Promise((resolve, reject) => {
            socket.emit(EventList_1.EventList.Server.Create, data);
            socket.once(EventList_1.EventList.Server.Create, (data) => {
                if (debug)
                    console.log("[DEBUG] SERVER CREATE: " + data);
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
exports.ServerObject = ServerObject;

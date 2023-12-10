"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelObject = void 0;
const EventList_1 = require("../../utils/EventList");
class ChannelObject {
    static create(socket, data, debug = false) {
        return new Promise((resolve, reject) => {
            socket.emit(EventList_1.EventList.Channel.Create, data);
            socket.once(EventList_1.EventList.Channel.Create, (data) => {
                if (debug)
                    console.log("[DEBUG] CHANNEL CREATE: " + data);
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
    static join(socket, data, debug = false) {
        return new Promise((resolve, reject) => {
            socket.emit(EventList_1.EventList.Channel.Join, data);
            socket.once(EventList_1.EventList.Channel.Join, (data) => {
                if (debug)
                    console.log("[DEBUG] CHANNEL JOIN: " + data);
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
    static get(socket, data, debug = false) {
        return new Promise((resolve, reject) => {
            socket.emit(EventList_1.EventList.Channel.Get, data);
            socket.once(EventList_1.EventList.Channel.Get, (data) => {
                if (debug)
                    console.log("[DEBUG] CHANNEL GET: " + data);
                if (data.error)
                    return reject(data.error);
                resolve(data.messages);
            });
            socket.once("error", (error) => {
                if (debug)
                    console.log("[DEBUG] ERROR: " + error);
                reject(error);
            });
        });
    }
}
exports.ChannelObject = ChannelObject;

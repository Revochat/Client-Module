"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserObject = void 0;
const EventList_1 = require("../../utils/EventList");
class UserObject {
    static addFriend(socket, data, debug = false) {
        return new Promise((resolve, reject) => {
            socket.emit(EventList_1.EventList.User.AddFriend, data);
            socket.once(EventList_1.EventList.User.AddFriend, (data) => {
                if (debug)
                    console.log("[DEBUG] USER ADD FRIEND: " + data);
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
exports.UserObject = UserObject;

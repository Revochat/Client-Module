"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(socket, options) {
        this.socket = socket;
        this.options = options;
    }
    addFriend(data) {
        return new Promise((resolve, reject) => {
            this.socket.emit("user.friend.add", data);
            this.socket.once('user.friend.add', (data) => {
                if (this.options.debug)
                    console.log("[DEBUG] USER ADD FRIEND: " + data);
                if (data.error)
                    return reject(data.error);
                resolve();
            });
            this.socket.once("error", (error) => {
                if (this.options.debug)
                    console.log("[DEBUG] ERROR: " + error);
                reject(error);
            });
        });
    }
    removeFriend(user_id) {
        return new Promise((resolve, reject) => {
            this.socket.emit("user.friend.remove", user_id);
            this.socket.once('user.friend.remove', (data) => {
                if (this.options.debug)
                    console.log("[DEBUG] USER REMOVE FRIEND: " + data);
                if (data.error)
                    return reject(data.error);
                resolve();
            });
        });
    }
}
exports.User = User;

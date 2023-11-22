"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(socket, options) {
        this.socket = socket;
        this.options = options;
    }
    addFriend(user_id) {
        return new Promise((resolve, reject) => {
            this.socket.emit("user.add.friend", user_id);
            this.socket.once('user.add.friend', (data) => {
                if (this.options.debug)
                    console.log("[DEBUG] USER ADD FRIEND: " + data);
                if (data.error)
                    return reject(data.error);
                resolve();
            });
        });
    }
    removeFriend(user_id) {
        return new Promise((resolve, reject) => {
            this.socket.emit("user.remove.friend", user_id);
            this.socket.once('user.remove.friend', (data) => {
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

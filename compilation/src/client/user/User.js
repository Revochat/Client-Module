"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    Socket;
    constructor(Socket) {
        this.Socket = Socket;
    }
    get() {
        this.Socket.emit('userGet');
        return new Promise((resolve, reject) => {
            this.Socket.on('userGet', (data) => {
                if (data) {
                    resolve(data);
                }
                else {
                    reject("User not found");
                }
            });
        });
    }
    set(data) {
        this.Socket.emit('userSet', data);
    }
    block(id) {
        this.Socket.emit('userBlockedAdd', id);
    }
    unblock(id) {
        this.Socket.emit('userBlockedRemove', id);
    }
}
exports.User = User;

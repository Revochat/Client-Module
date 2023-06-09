"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Friend = void 0;
class Friend {
    Socket;
    constructor(Socket) {
        this.Socket = Socket;
    }
    add(id) {
        this.Socket.emit('friendAdd', id);
    }
    remove(id) {
        this.Socket.emit('friendRemove', id);
    }
    get list() {
        return new Promise((resolve, reject) => {
            this.Socket.emit('friendGet');
            this.Socket.on('friendGet', (data) => {
                if (data) {
                    resolve(data);
                }
                else {
                    reject("Invalid token");
                }
            });
        });
    }
    get received() {
        return new Promise((resolve, reject) => {
            this.Socket.emit('friendGetRequestsReceived');
            this.Socket.on('friendGetRequestsReceived', (data) => {
                if (data) {
                    resolve(data);
                }
                else {
                    reject("Invalid token");
                }
            });
        });
    }
}
exports.Friend = Friend;

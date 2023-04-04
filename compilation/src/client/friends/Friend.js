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
}
exports.Friend = Friend;

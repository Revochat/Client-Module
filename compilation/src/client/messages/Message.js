"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
class Message {
    Socket;
    constructor(Socket) {
        this.Socket = Socket;
    }
    send(channel, message) {
        this.Socket.emit('messageCreate', channel, message);
    }
}
exports.Message = Message;

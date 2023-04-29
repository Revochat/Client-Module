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
    get(channel) {
        this.Socket.emit('messageGet', channel);
        return new Promise((resolve, reject) => {
            this.Socket.on('messageGet', (data) => {
                if (data) {
                    resolve(data);
                }
                else {
                    reject("Message not found");
                }
            });
        });
    }
}
exports.Message = Message;

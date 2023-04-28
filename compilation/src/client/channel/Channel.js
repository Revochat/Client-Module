"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
class Channel {
    Socket;
    constructor(Socket) {
        this.Socket = Socket;
    }
    get get() {
        return new Promise((resolve, reject) => {
            this.Socket.emit('channelsGet');
            this.Socket.on('channelsGet', (data) => {
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
exports.Channel = Channel;

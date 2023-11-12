"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sender = void 0;
class Sender {
    static message(socket, request) {
        return new Promise((resolve, reject) => {
            socket.send(JSON.stringify({
                channel_id: request.channel_id,
                message: request.message
            }));
            socket.once('message.send', (data) => {
                resolve(data);
            });
            setTimeout(() => {
                reject('timeout');
            }, 5000);
        });
    }
    static Attachment(socket, request) {
        return new Promise((resolve, reject) => {
            socket.send(JSON.stringify({
                channel_id: request.channel_id,
                message: request.message,
                attachment: request.attachment
            }));
            socket.once('message', (data) => {
                resolve(data);
            });
            setTimeout(() => {
                reject('timeout');
            }, 5000);
        });
    }
}
exports.Sender = Sender;

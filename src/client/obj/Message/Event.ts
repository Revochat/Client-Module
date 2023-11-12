import { Socket } from "socket.io-client";
import { Message } from "./Message";

export class MessageEvent implements Message.Response {
    message_id: string;
    channel_id: string;
    message: string;
    user_id: string;
    created_at: string;
    private socket: Socket;

    constructor(message: Message.Response, socket: Socket) {
        this.message_id = message.message_id;
        this.channel_id = message.channel_id;
        this.message = message.message;
        this.user_id = message.user_id;
        this.created_at = message.created_at;
        this.socket = socket;
    }

    async delete(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.socket.emit('delete', JSON.stringify({
                message_id: this.message_id
            }));

            this.socket.once('delete', (data) => {
                resolve();
            });

            setTimeout(() => {
                reject('timeout');
            }, 5000);
        });     
    }
}
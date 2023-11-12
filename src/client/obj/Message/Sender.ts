import { Socket } from "socket.io-client";
import { Message} from "./Message";

export class Sender {
    static message(socket: Socket, request: Message.Request): Promise<Message.Response> {
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

    static Attachment(socket: Socket, request: Message.AttachmentRequest): Promise<Message.Response> {
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
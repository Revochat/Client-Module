import { Socket } from "socket.io-client";
import { Message } from "../obj/Message/";

export class Send {
    private socket: Socket;

    constructor(socket: Socket) {
        this.socket = socket;
    }

    message(request: Message.Request): Promise<Message.Response> {
        return Message.Sender.message(this.socket, request);
    }

    attachment(request: Message.AttachmentRequest): Promise<Message.Response> {
        return Message.Sender.Attachment(this.socket, request);
    }
}
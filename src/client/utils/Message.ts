import { Socket } from "socket.io-client";
import { Client } from "../client";
import { MessageObject } from "../obj/Message/Message";

export class Message {
    private socket: Socket;

    constructor(socket: Socket, options: Client.ClientOptions) {
        this.socket = socket;
    }

    public send(data: object): Promise<void> {
        return MessageObject.send(this.socket, data);
    }
}
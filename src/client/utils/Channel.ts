import { Socket } from "socket.io-client";
import { Client } from "../client";
import { ChannelObject } from "../obj/Channel/Channel";

export class Channel {
    private socket: Socket;

    constructor(socket: Socket, options: Client.ClientOptions) {
        this.socket = socket;
    }

    public create(data: object): Promise<void> {
        return ChannelObject.create(this.socket, data);
    }

    public join(data: object): Promise<void> {
        return ChannelObject.join(this.socket, data);
    }
}
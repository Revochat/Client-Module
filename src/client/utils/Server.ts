import { Socket } from "socket.io-client";
import { Client } from "../client";
import { ServerObject } from "../obj/Server/Server";

export class Server {
    private socket: Socket;

    constructor(socket: Socket, options: Client.ClientOptions) {
        this.socket = socket;
    }

    public create(data: object): Promise<void> {
        return ServerObject.create(this.socket, data);
    }
}
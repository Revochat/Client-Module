import { Socket, io } from "socket.io-client";
import { Client } from "../client";
import { EventList } from "./EventList";
import { UserObject } from "../obj/User/User";
export class User {
    private socket: Socket;
    private options: Client.ClientOptions;

    constructor(socket: Socket, options: Client.ClientOptions) {
        this.socket = socket;
        this.options = options;
    }

    public addFriend(data: object): Promise<void> {
        return UserObject.addFriend(this.socket, data, this.options.debug)
    }
}
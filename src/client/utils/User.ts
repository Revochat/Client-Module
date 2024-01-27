import { Socket, io } from "socket.io-client";
import { Client } from "../client";
import { EventList } from "./EventList";
import { UserObject } from "../obj/User/User";
import FormData from "form-data";
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

    public removeFriend(data: object): Promise<void> {      
        return UserObject.removeFriend(this.socket, data, this.options.debug)
    }

    public setAvatar(serverUrl: string, token: string, userId: string, formData: FormData): Promise<string> {
        return UserObject.setAvatar(serverUrl, token, userId, formData, this.options.debug)
    }
}
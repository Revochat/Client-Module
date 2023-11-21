import { Socket, io } from "socket.io-client";
import { Client } from "../client";
import { EventList } from "./EventList";
export class User {
    private socket: Socket;
    private options: Client.ClientOptions;

    constructor(socket: Socket, options: Client.ClientOptions) {
        this.socket = socket;
        this.options = options;
    }

    public addFriend(user_id: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.socket.emit("user.add.friend", user_id);
            this.socket.once('user.add.friend', (data) => {
                if(this.options.debug) console.log("[DEBUG] USER ADD FRIEND: " + data);
                if(data.error) return reject(data.error);
                resolve();
            });
        });
    }

    public removeFriend(user_id: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.socket.emit("user.remove.friend", user_id);
            this.socket.once('user.remove.friend', (data) => {
                if(this.options.debug) console.log("[DEBUG] USER REMOVE FRIEND: " + data);
                if(data.error) return reject(data.error);
                resolve();
            });
        });
    }
}
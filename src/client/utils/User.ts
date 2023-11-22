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

    public addFriend(data: object): Promise<void> {
        return new Promise((resolve, reject) => {
            this.socket.emit("user.friend.add", data);
            this.socket.once('user.friend.add', (data) => {
                if(this.options.debug) console.log("[DEBUG] USER ADD FRIEND: " + data);
                if(data.error) return reject(data.error);
                resolve();
            });
            
            this.socket.once("error", (error) => {
                if(this.options.debug) console.log("[DEBUG] ERROR: " + error)
                reject(error);
            });
        });
    }

    public removeFriend(user_id: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.socket.emit("user.friend.remove", user_id);
            this.socket.once('user.friend.remove', (data) => {
                if(this.options.debug) console.log("[DEBUG] USER REMOVE FRIEND: " + data);
                if(data.error) return reject(data.error);
                resolve();
            });
        });
    }
}
import { Socket, io } from "socket.io-client";
import { Client } from "../client";
import { EventList } from "./EventList";
import { UserFriend } from "../obj/User/Friend";
export class User {
    private socket: Socket;
    private options: Client.ClientOptions;

    constructor(socket: Socket, options: Client.ClientOptions) {
        this.socket = socket;
        this.options = options;
    }

    public addFriend(data: object): Promise<void> {
        return UserFriend.addFriend(this.socket, data, this.options.debug)
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
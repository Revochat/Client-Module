
import EventEmitter from "events";

import { Socket, io } from "socket.io-client";
import { Message } from "./messages";
import { Friend } from "./friends";
import { User } from "./user";

export class Client extends EventEmitter { 

    public Socket: Socket = io(require('../../config.json').URI);
    public message: Message = new Message(this.Socket);
    public friend: Friend = new Friend(this.Socket);
    public user: User = new User(this.Socket);
    public channels: any = [];

    constructor() {
        super();
        this.Socket.on('connect', () => {
            this.Socket.onAny((event: any, ...args: any) => {
                this.emit(event, ...args);
            });
        });
    }

    public login(token: string): Promise<void> {
        this.Socket.emit('login', token);
        return new Promise((resolve, reject) => {
            this.Socket.on('login', (data: object) => {
                if (data) {
                    resolve();
                } else {
                    reject("Invalid token");
                }
            });
        });
    }

}
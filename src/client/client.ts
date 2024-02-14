import {io, Socket} from "socket.io-client";
import { Message } from "./utils/Message";
import { Connect } from "./utils/Connect";
import { On } from "./utils/On";
import { Emit } from "./utils/Emit";
import { User } from "./utils/User";
import { Channel } from "./utils/Channel";
import { Server } from "./utils/Server";

export declare namespace Client {
    interface ClientOptions {
        url: string;
        debug?: boolean;
    }

    interface Client {
        message: Message;
        on(event: string, fn: (data: any) => void): void;
        emit(event: string, data: any): void;
    }
}


export class Client implements Client.Client {
    private options: Client.ClientOptions;
    private socket: Socket;
    public message: Message;
    private connect: Connect;
    public user: User;
    public channel: Channel;
    public server: Server;
    public close: () => void = () => {
        this.socket.close();
    }

    constructor(options: Client.ClientOptions) {
        this.options = options;
        this.socket = io(options.url, { transports: ["websocket"] });
        this.message = new Message(this.socket, this.options);
        this.connect = new Connect(this.socket, this.options)
        this.user = new User(this.socket, this.options);
        this.channel = new Channel(this.socket, this.options);
        this.server = new Server(this.socket, this.options);
    }

    on(event: string, fn: (data: any) => void) {
        this.socket.on(event, (data) => {
            if(this.options.debug) console.log("[DEBUG] EVENT: " + event + " DATA: " + data);
            On.addListener(event, data);
            fn(data);
        })
    }

    onAny(fn: (event: string, data: any) => void) {
        this.socket.onAny((event, data) => {
            if(this.options.debug) console.log("[DEBUG] EVENT: " + event + " DATA: " + data);
            On.addListener(event, data);
            fn(event, data);
        })
    }
    
    emit(event: string, data?: any) {
        this.socket.emit(event, data);
        if(this.options.debug) console.log("[DEBUG] EMIT: " + event + " DATA: " + data);
    }
    
    login(token: string): Promise<void> {
        return this.connect.login(token);
    }
}

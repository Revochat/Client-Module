import { Message } from "./obj/Message/Message";
import {io, Socket} from "socket.io-client";
import { Send } from "./utils/Send";
import { Connect } from "./utils/Connect";
import { On } from "./utils/On";
import { Emit } from "./utils/Emit";

export declare namespace Client {
    interface ClientOptions {
        url: string;
        token: string;
        debug?: boolean;
    }

    interface Client {
        send: Send;
        login: Connect;
        on(event: string, fn: (data: Message.Response) => void): void;
    }
}


export class Client implements Client.Client {
    private options: Client.ClientOptions;
    private socket: Socket;
    public send: Send;
    public login: Connect;

    constructor(options: Client.ClientOptions) {
        this.options = options;
        this.socket = io(options.url);
        this.send = new Send(this.socket);
        this.login = new Connect(this.socket, this.options);
    }

    on(event: string, fn: (data: Message.Response) => void) {
        On.addListener(this.socket, event, fn);
    }
    
    emit(event: string, data: any) {
        Emit.emit(this.socket, event, data);
    }
}

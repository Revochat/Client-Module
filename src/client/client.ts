import { Message } from "./obj/Message";
import {io, Socket} from "socket.io-client";

declare namespace Client {
    interface ClientOptions {
        url: string;
        token: string;
        debug?: boolean;
    }

    interface Client {
        revoConnect(): Promise<void>;
        message(request: Message.Request): Promise<Message.Response>;
        on(event: string, fn: (...args: any[]) => void): void;
    }
}


export class Client implements Client.Client {
    options: Client.ClientOptions;
    socket: Socket;

    constructor(options: Client.ClientOptions) {
        this.options = options;
        this.socket = io(options.url);
    }

    revoConnect(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.socket = io(this.options.url);
            if(this.options.debug) console.log("[DEBUG] CONNECTING TO " + this.options.url);
            this.socket.on("connect", () => {
                this.socket.emit("conn",JSON.stringify({
                    token: this.options.token
                }));
                this.socket.once('conn', (data) => {
                    if(data.error) return reject(data.error);
                    if(this.options.debug) console.log(data);
                    resolve();
                });
            });

            this.socket.once("disconnect", () => {
                if(this.options.debug) console.log("[DEBUG] DISCONNECT")
                reject('disconnect');
            });

            this.socket.once("error", (error) => {
                if(this.options.debug) console.log("[DEBUG] ERROR")
                reject(error);
            });

            setTimeout(() => {
                if(this.socket.connected) return;
                reject('[DEBUG] timeout');
            }, 5000);
        });
    }

    on(event: string, fn: (...args: any[]) => void) {
        this.socket.on(event, fn);
    }

    message(request: Message.Request): Promise<Message.Response> {
        return new Promise((resolve, reject) => {
            this.socket.send(JSON.stringify({
                channel_id: request.channel_id,
                message: request.message
            }));

            this.socket.once('message', (data) => {
                resolve(data);
            });

            setTimeout(() => {
                reject('timeout');
            }, 5000);
        });
    }
}

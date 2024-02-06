import { Socket, io } from "socket.io-client";
import { Client } from "../client";
import { EventList } from "./EventList";

export class Connect {
    private socket: Socket;
    private options: Client.ClientOptions;

    constructor(socket: Socket, options: Client.ClientOptions) {
        this.socket = socket;
        this.options = options;
    }

    public login(token: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.socket.on("connect", () => {
                this.socket.emit(EventList.User.Connect, token);
                this.socket.once(EventList.User.Connect, (data) => {
                    if(this.options.debug) console.log("[DEBUG] CONNECTED: " + data);
                    if(data.error) return reject(data.error);
                    resolve();
                });
            });

            this.socket.once("disconnect", () => {
                if(this.options.debug) console.log("[DEBUG] DISCONNECT")
                this.socket.removeAllListeners();
                this.socket.disconnect();
                reject('Socket disconnected');
            });

            this.socket.once("error", (error) => {
                if(this.options.debug) console.log("[DEBUG] ERROR: " + error)
                reject(error);
            });

            setTimeout(() => {
                if(this.socket.connected) return;
                reject("Socket Connexion timeout");
            }, 5000);
        });
    }
}
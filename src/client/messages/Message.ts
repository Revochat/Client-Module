import { Socket } from "socket.io-client";

export class Message {
   
    private Socket: Socket;

    constructor(Socket: Socket) {
        this.Socket = Socket;
    }

    public send(channel: number, message: string): void {
        this.Socket.emit('messageCreate', channel, message);
    }

    public get(channel: number): Promise<object> {
        this.Socket.emit('messageGet', channel);
        return new Promise((resolve, reject) => {
            this.Socket.on('messageGet', (data: object) => {
                if (data) {
                    resolve(data);
                } else {
                    reject("Channel not found");
                }
            });
        });
    }
}
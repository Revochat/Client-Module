import { Socket } from "socket.io-client";

export class Message {
   
    private Socket: Socket;

    constructor(Socket: Socket) {
        this.Socket = Socket;
    }

    public send(channel: number, message: string): void {
        this.Socket.emit('messageCreate', channel, message);
    }
}
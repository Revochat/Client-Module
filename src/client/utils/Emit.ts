import { Socket } from "socket.io-client";

export class Emit {
    static emit(socket: Socket, event: string, ...args: any[] ) {
        socket.emit(event, ...args);
    }
}
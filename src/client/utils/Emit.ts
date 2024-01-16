import { Socket } from "socket.io-client";

export class Emit {
    static emit(socket: Socket, event: string, ...args: any[] | undefined[] ) {
        socket.emit(event, ...args);
    }
}
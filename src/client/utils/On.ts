import { Socket } from "socket.io-client";

export class On {
    static addListener(socket: Socket, event: string, fn: (...args: any[]) => void) {
        switch(event) {
            case 'message':
                socket.on(event, (data) => {
                    fn(JSON.parse(data));
                });
                break;
            default:
                socket.on(event, (data) => {
                    fn(JSON.parse(data));
                });
                break;
        }
    }
}
import { Socket } from "socket.io-client";

export class Channel {
   
    private Socket: Socket;

    constructor(Socket: Socket) {
        this.Socket = Socket;
    }

    public get get():  Promise<object> {
        return new Promise((resolve, reject) => {
            this.Socket.emit('channelsGet');
            this.Socket.on('channelsGet', (data: object) => {
                if (data) {
                    resolve(data);
                } else {
                    reject("Invalid token");
                }
            });
        });
    }
}
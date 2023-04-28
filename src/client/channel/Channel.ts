import { Socket } from "socket.io-client";

export class Channel {
   
    private Socket: Socket;

    constructor(Socket: Socket) {
        this.Socket = Socket;
    }

    public get channel():  Promise<object> {
        return new Promise((resolve, reject) => {
            this.Socket.emit('channelGet', (data: object) => {
                if(!data) reject('No data received');
                resolve(data);
            });
        });
    }
}
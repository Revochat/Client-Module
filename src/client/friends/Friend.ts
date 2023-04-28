import { Socket } from "socket.io-client";

export class Friend {
        
        private Socket: Socket;
    
        constructor(Socket: Socket) {
            this.Socket = Socket;
        }
    
        public add(id: number): void {
            this.Socket.emit('friendAdd', id);
        }
    
        public remove(id: number): void {
            this.Socket.emit('friendRemove', id);
        }

        public get list(): Promise<object> {
            return new Promise((resolve, reject) => {
                this.Socket.emit('friendGet');
                this.Socket.on('friendGet', (data: object) => {
                    if (data) {
                        resolve(data);
                    } else {
                        reject("Invalid token");
                    }
                });
            });
        }

        public get received(): Promise<object> {
            return new Promise((resolve, reject) => {
                this.Socket.emit('friendGetRequestsReceived');
                this.Socket.on('friendGetRequestsReceived', (data: object) => {
                    if (data) {
                        resolve(data);
                    } else {
                        reject("Invalid token");
                    }
                });
            });
        }
}
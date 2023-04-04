import { Socket } from "socket.io-client";

export class User {
    
        private Socket: Socket;
    
        constructor(Socket: Socket) {
            this.Socket = Socket;
        }
    
        public get(): Promise<object> {
            this.Socket.emit('userGet');
            return new Promise((resolve, reject) => {
                this.Socket.on('userGet', (data: object) => {
                    if (data) {
                        resolve(data);
                    } else {
                        reject("User not found");
                    }
                });
            });
        }
    
        public set(data: any): void {
            this.Socket.emit('userSet', data);
        }
    
        public block(id: number): void {
            this.Socket.emit('userBlockedAdd', id);
        }
    
        public unblock(id: number): void {
            this.Socket.emit('userBlockedRemove', id);
        }
    }
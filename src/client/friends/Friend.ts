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
}
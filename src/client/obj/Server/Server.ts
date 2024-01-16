import { Socket } from "socket.io-client";
import { EventList } from "../../utils/EventList";

export class ServerObject {
    static create(socket: Socket, data: object, debug: boolean = false): Promise<void> { // Create a channel
        return new Promise((resolve, reject) => {
            socket.emit(EventList.Server.Create, data);
            socket.once(EventList.Server.Create, (data) => {
                if(debug) console.log("[DEBUG] SERVER CREATE: " + data);
                if(data.error) return reject(data.error);
                resolve();
            });
            
            socket.once("error", (error) => {
                if(debug) console.log("[DEBUG] ERROR: " + error)
                reject(error);
            });
        });
    }
}
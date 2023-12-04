import { Socket } from "socket.io-client";
import { EventList } from "../../utils/EventList";

export class MessageObject {
    static send(socket: Socket, data: object, debug: boolean = false): Promise<void> {
        return new Promise((resolve, reject) => {
            socket.emit(EventList.Message.Send, data);
            socket.once(EventList.Message.Send, (data) => {
                if(debug) console.log("[DEBUG] MESSAGE SEND: " + data);
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
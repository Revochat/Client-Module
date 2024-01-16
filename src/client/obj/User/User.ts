import { Socket } from "socket.io-client";
import { EventList } from "../../utils/EventList";

export class UserObject {
    static addFriend(socket: Socket, data: object, debug: boolean = false): Promise<void> {
        return new Promise((resolve, reject) => {
            socket.emit(EventList.User.AddFriend, data);
            socket.once(EventList.User.AddFriend, (data) => {
                if(debug) console.log("[DEBUG] USER ADD FRIEND: " + data);
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
import { Socket } from "socket.io-client";
import { EventList } from "../../utils/EventList";

export class ChannelObject {
    static create(socket: Socket, data: object, debug: boolean = false): Promise<void> { // Create a channel
        return new Promise((resolve, reject) => {
            socket.emit(EventList.Channel.Create, data);
            socket.once(EventList.Channel.Create, (data) => {
                if(debug) console.log("[DEBUG] CHANNEL CREATE: " + data);
                if(data.error) return reject(data.error);
                resolve();
            });
            
            socket.once("error", (error) => {
                if(debug) console.log("[DEBUG] ERROR: " + error)
                reject(error);
            });
        });
    }

    static join(socket: Socket, data: object, debug: boolean = false): Promise<void> { // Join a channel
        return new Promise((resolve, reject) => {
            socket.emit(EventList.Channel.Join, data);
            socket.once(EventList.Channel.Join, (data) => {
                if(debug) console.log("[DEBUG] CHANNEL JOIN: " + data);
                if(data.error) return reject(data.error);
                resolve();
            });
            
            socket.once("error", (error) => {
                if(debug) console.log("[DEBUG] ERROR: " + error)
                reject(error);
            });
        });
    }

    static getChannel(socket: Socket, debug: boolean = false): Promise<void> { // Get last x messages of a channel
        return new Promise((resolve, reject) => {
            socket.emit(EventList.Channel.Get);
            socket.once(EventList.Channel.Get, (data) => {
                if(debug) console.log("[DEBUG] CHANNEL GETCHANNEL: " + data);
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
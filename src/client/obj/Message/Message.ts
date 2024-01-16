import { Socket } from "socket.io-client";
import { EventList } from "../../utils/EventList";
import axios, { AxiosResponse } from 'axios';
import FormData from 'form-data';
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

    static uploadFile(serverUrl: string, token: string, channelId: string, formData: FormData, debug: boolean = false): Promise<string> {
        return new Promise(async (resolve, reject) => {
            const url = `${serverUrl}/upload/${channelId}`;
        
            try {
                const response = await axios.post(url, formData, {
                    headers: {
                        ...formData.getHeaders(),
                        'Authorization': `Bearer ${token}`
                    }
                });
        
                if(debug) console.log("[DEBUG] UPLOAD FILE: " + response.data);
                if(response.data.link) resolve(serverUrl + response.data.link);
            } catch (error) {
                if(debug) console.log("[DEBUG] ERROR: " + error);
                reject(error);
            }
        });
    }

    static sendFile(serverUrl: string, token: string, channelId: string, formData: FormData, debug: boolean = false): Promise<string> {
        return new Promise(async (resolve, reject) => {
            try {
                const uploadStatus = await this.uploadFile(serverUrl, token, channelId, formData, debug);
                if(!uploadStatus) return reject("Upload failed");

                return resolve(uploadStatus);
            } catch (error) {
                if(debug) console.log("[DEBUG] ERROR: " + error)
                reject(error);
            }
        });
    }
}
import { Socket } from "socket.io-client";
import { EventList } from "../../utils/EventList";
import axios, { AxiosResponse } from 'axios';
import FormData from 'form-data';
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

    static removeFriend(socket: Socket, data: object, debug: boolean = false): Promise<void> {
        return new Promise((resolve, reject) => {
            socket.emit(EventList.User.RemoveFriend, data);
            socket.once(EventList.User.RemoveFriend, (data) => {
                if(debug) console.log("[DEBUG] USER REMOVE FRIEND: " + data);
                if(data.error) return reject(data.error);
                resolve();
            });
            
            socket.once("error", (error) => {
                if(debug) console.log("[DEBUG] ERROR: " + error)
                reject(error);
            });
        });
    }
    
    static uploadFile(serverUrl: string, token: string, userId: string, formData: FormData, debug: boolean = false): Promise<string> {
        return new Promise(async (resolve, reject) => {
            const url = `${serverUrl}/uploads/avatar/${userId}`;
        
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

    static setAvatar(serverUrl: string, token: string, userId: string, formData: FormData, debug: boolean = false): Promise<string> {
        return new Promise(async (resolve, reject) => {
            try {
                const uploadStatus = await this.uploadFile(serverUrl, token, userId, formData, debug);
                if(!uploadStatus) return reject("Upload failed");

                return resolve(uploadStatus);
            } catch (error) {
                if(debug) console.log("[DEBUG] ERROR: " + error)
                reject(error);
            }
        });
    }
}
import { Socket } from "socket.io-client";
import { Client } from "../client";
import { MessageObject } from "../obj/Message/Message";
import FormData from 'form-data';

export class Message {
    private socket: Socket;
    private options: Client.ClientOptions;

    constructor(socket: Socket, options: Client.ClientOptions) {
        this.socket = socket;
        this.options = options;
    }

    public send(data: object): Promise<void> {
        return MessageObject.send(this.socket, data);
    }

    public delete(data: object): Promise<void> {
        return MessageObject.delete(this.socket, data);
    }
    
    public async sendFile(serverUrl: string, token: string, channelId: string, formData: FormData): Promise<string | null> {
        try {
            const link = await MessageObject.sendFile(serverUrl, token, channelId, formData);
            return link;
        } catch {
            return null;
        }
    }
}


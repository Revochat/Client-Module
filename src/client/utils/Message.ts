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

    // static async sendFile(socket: Socket, serverUrl: string, token: string, channelId: string, formData: FormData, debug: boolean = false): Promise<void> {

    public async sendFile(serverUrl: string, token: string, channelId: string, formData: FormData): Promise<string | null> {
        try {
            return MessageObject.sendFile(serverUrl, token, channelId, formData);
        } catch (e) {
            return null;
        }
    }
}


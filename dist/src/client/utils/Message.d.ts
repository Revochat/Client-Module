import { Socket } from "socket.io-client";
import { Client } from "../client";
import FormData from 'form-data';
export declare class Message {
    private socket;
    private options;
    constructor(socket: Socket, options: Client.ClientOptions);
    send(data: object): Promise<void>;
    delete(data: object): Promise<void>;
    sendFile(serverUrl: string, token: string, channelId: string, formData: FormData): Promise<string | null>;
}
//# sourceMappingURL=Message.d.ts.map
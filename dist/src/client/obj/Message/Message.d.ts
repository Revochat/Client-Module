import { Socket } from "socket.io-client";
import FormData from 'form-data';
export declare class MessageObject {
    static send(socket: Socket, data: object, debug?: boolean): Promise<void>;
    static delete(socket: Socket, data: object, debug?: boolean): Promise<void>;
    static uploadFile(serverUrl: string, token: string, channelId: string, formData: FormData, debug?: boolean): Promise<string>;
    static sendFile(serverUrl: string, token: string, channelId: string, formData: FormData, debug?: boolean): Promise<string>;
}
//# sourceMappingURL=Message.d.ts.map
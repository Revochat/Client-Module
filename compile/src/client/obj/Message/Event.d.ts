import { Socket } from "socket.io-client";
import { Message } from "./MessageObject";
export declare class MessageEvent implements Message.Response {
    message_id: string;
    channel_id: string;
    message: string;
    user_id: string;
    created_at: string;
    private socket;
    constructor(message: Message.Response, socket: Socket);
    delete(): Promise<void>;
}
//# sourceMappingURL=Event.d.ts.map
import { Socket } from "socket.io-client";
import { Message } from "./Message";
export declare class MessageSender {
    static message(socket: Socket, request: Message.Request): Promise<Message.Response>;
    static Attachment(socket: Socket, request: Message.AttachmentRequest): Promise<Message.Response>;
}
//# sourceMappingURL=Sender.d.ts.map
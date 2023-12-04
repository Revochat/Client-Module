import { Socket } from "socket.io-client";
import { Message } from "../obj/Message";
export declare class Send {
    private socket;
    constructor(socket: Socket);
    message(request: Message.Request): Promise<Message.Response>;
    attachment(request: Message.AttachmentRequest): Promise<Message.Response>;
}
//# sourceMappingURL=Send.d.ts.map
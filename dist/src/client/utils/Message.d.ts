import { Socket } from "socket.io-client";
import { Client } from "../client";
export declare class Message {
    private socket;
    constructor(socket: Socket, options: Client.ClientOptions);
    send(data: object): Promise<void>;
}
//# sourceMappingURL=Message.d.ts.map
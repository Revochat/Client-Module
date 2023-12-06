import { Socket } from "socket.io-client";
import { Client } from "../client";
export declare class Channel {
    private socket;
    constructor(socket: Socket, options: Client.ClientOptions);
    create(data: object): Promise<void>;
    join(data: object): Promise<void>;
}
//# sourceMappingURL=Channel.d.ts.map
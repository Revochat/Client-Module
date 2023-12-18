import { Socket } from "socket.io-client";
import { Client } from "../client";
export declare class Server {
    private socket;
    constructor(socket: Socket, options: Client.ClientOptions);
    create(data: object): Promise<void>;
}
//# sourceMappingURL=Server.d.ts.map
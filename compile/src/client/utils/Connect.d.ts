import { Socket } from "socket.io-client";
import { Client } from "../client";
export declare class Connect {
    private socket;
    private options;
    constructor(socket: Socket, options: Client.ClientOptions);
    login(token: string): Promise<void>;
}
//# sourceMappingURL=Connect.d.ts.map
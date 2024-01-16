import { Socket } from "socket.io-client";
import { Client } from "../client";
export declare class User {
    private socket;
    private options;
    constructor(socket: Socket, options: Client.ClientOptions);
    addFriend(data: object): Promise<void>;
}
//# sourceMappingURL=User.d.ts.map
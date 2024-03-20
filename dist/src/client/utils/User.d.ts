import { Socket } from "socket.io-client";
import { Client } from "../client";
import FormData from "form-data";
export declare class User {
    private socket;
    private options;
    constructor(socket: Socket, options: Client.ClientOptions);
    addFriend(data: object): Promise<void>;
    removeFriend(data: object): Promise<void>;
    setAvatar(serverUrl: string, token: string, userId: string, formData: FormData): Promise<string>;
    getChannels(): Promise<void>;
    getFriendsList(): Promise<void>;
}
//# sourceMappingURL=User.d.ts.map
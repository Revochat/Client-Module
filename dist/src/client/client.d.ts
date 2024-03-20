import { Message } from "./utils/Message";
import { User } from "./utils/User";
import { Channel } from "./utils/Channel";
import { Server } from "./utils/Server";
export declare namespace Client {
    interface ClientOptions {
        url: string;
        debug?: boolean;
    }
    interface Client {
        message: Message;
        on(event: string, fn: (data: any) => void): void;
        emit(event: string, data: any): void;
    }
}
export declare class Client implements Client.Client {
    private options;
    private socket;
    message: Message;
    private connect;
    user: User;
    channel: Channel;
    server: Server;
    close: () => void;
    constructor(options: Client.ClientOptions);
    on(event: string, fn: (data: any) => void): void;
    onAny(fn: (event: string, data: any) => void): void;
    emit(event: string, data?: any): void;
    login(token: string): Promise<void>;
}
//# sourceMappingURL=client.d.ts.map
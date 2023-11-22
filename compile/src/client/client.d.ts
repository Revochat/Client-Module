import { Message } from "./obj/Message/Message";
import { Send } from "./utils/Send";
import { User } from "./utils/User";
export declare namespace Client {
    interface ClientOptions {
        url: string;
        debug?: boolean;
    }
    interface Client {
        send: Send;
        on(event: string, fn: (data: Message.Response) => void): void;
        emit(event: string, data: any): void;
    }
}
export declare class Client implements Client.Client {
    private options;
    private socket;
    send: Send;
    private connect;
    user: User;
    constructor(options: Client.ClientOptions);
    on(event: string, fn: (data: any) => void): void;
    onAny(fn: (event: string, data: any) => void): void;
    emit(event: string, data?: any): void;
    login(token: string): Promise<void>;
}
//# sourceMappingURL=client.d.ts.map
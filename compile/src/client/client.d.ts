import { Message } from "./obj/Message/Message";
import { Send } from "./utils/Send";
import { Connect } from "./utils/Connect";
export declare namespace Client {
    interface ClientOptions {
        url: string;
        token: string;
        debug?: boolean;
    }
    interface Client {
        send: Send;
        login: Connect;
        on(event: string, fn: (data: Message.Response) => void): void;
    }
}
export declare class Client implements Client.Client {
    private options;
    private socket;
    send: Send;
    login: Connect;
    constructor(options: Client.ClientOptions);
    on(event: string, fn: (data: Message.Response) => void): void;
    emit(event: string, data: any): void;
}
//# sourceMappingURL=client.d.ts.map
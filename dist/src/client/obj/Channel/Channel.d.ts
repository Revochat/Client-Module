import { Socket } from "socket.io-client";
export declare class ChannelObject {
    static create(socket: Socket, data: object, debug?: boolean): Promise<void>;
    static join(socket: Socket, data: object, debug?: boolean): Promise<void>;
    static get(socket: Socket, data: object, debug?: boolean): Promise<void>;
}
//# sourceMappingURL=Channel.d.ts.map
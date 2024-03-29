import { Socket } from "socket.io-client";
import FormData from 'form-data';
export declare class UserObject {
    static addFriend(socket: Socket, data: object, debug?: boolean): Promise<void>;
    static removeFriend(socket: Socket, data: object, debug?: boolean): Promise<void>;
    static uploadFile(serverUrl: string, token: string, userId: string, formData: FormData, debug?: boolean): Promise<string>;
    static setAvatar(serverUrl: string, token: string, userId: string, formData: FormData, debug?: boolean): Promise<string>;
    static getChannels(socket: Socket, debug?: boolean): Promise<void>;
    static getFriendsList(socket: Socket, debug?: boolean): Promise<void>;
    static GetFriendsReceivedList(socket: Socket, debug?: boolean): Promise<void>;
}
//# sourceMappingURL=User.d.ts.map
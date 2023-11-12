import { MessageEvent } from "./Event";
import { MessageSender} from "./Sender";

export namespace Message {
    export interface Request {
        type: string | "message";
        channel_id: string;
        message: string;
    }

    export interface Response {
        message_id: string;
        channel_id: string;
        message: string;
        user_id: string;
        created_at: string;
    }

    export interface AttachmentRequest {
        type: string | "attachment";
        channel_id: string;
        message: string;
        attachment: string;
    }

    export interface ResponseError {
        error: string;
    }

    // export Sender and Event
    export const Sender = MessageSender;
    export const Event = MessageEvent;
}
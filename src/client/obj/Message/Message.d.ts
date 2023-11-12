import { Event } from "./Event";
import { Sender } from "./Sender";

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

    export { Event, Sender };
}
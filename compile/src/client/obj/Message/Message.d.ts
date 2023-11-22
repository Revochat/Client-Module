import { MessageEvent } from "./Event";
import { MessageSender } from "./Sender";
export declare namespace Message {
    interface Request {
        type: string | "message";
        channel_id: string;
        message: string;
    }
    interface Response {
        message_id: string;
        channel_id: string;
        message: string;
        user_id: string;
        created_at: string;
    }
    interface AttachmentRequest {
        type: string | "attachment";
        channel_id: string;
        message: string;
        attachment: string;
    }
    interface ResponseError {
        error: string;
    }
    const Sender: typeof MessageSender;
    const Event: typeof MessageEvent;
}
//# sourceMappingURL=Message.d.ts.map
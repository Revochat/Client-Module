export declare namespace Message {
    interface Request {
        type: string;
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
}
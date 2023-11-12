export namespace EventList {
    export enum Message {
        Send = "message.send",
        Receive = "message.receive",
        Error = "message.error",
    }

    export enum Channel {
        Create = "channel.create",
        Delete = "channel.delete",
        Error = "channel.error",
    }

    export enum User {
        Create = "user.create",
        Delete = "user.delete",
        Error = "user.error",
        Get = "user.get",
        Connect = "user.connect",
    }

    export enum Server {
        Error = "server.error",
    }

    export enum Delete {
        Message = "delete.message",
        Channel = "delete.channel",
    }

    export enum Update {
        Message = "update.message",
        Channel = "update.channel",
    }

    export enum Join {
        Channel = "join.channel",
    }
}
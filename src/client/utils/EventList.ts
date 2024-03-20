export namespace EventList {
    
    export enum Message {
        Send = "message.send",
        Delete = "message.delete",
        SendFile = "message.sendFile",
    }

    export enum Channel {
        Create = "channel.create",
        Get = "channel.get",
        Join = "channel.join",
        GetAll = "channel.get.all",
    }

    export enum User {
        Create = "user.create",
        Get = "user.get",
        Connect = "user.connect",
        AddFriend = "user.friend.add",
        Update = "user.update",
        RemoveFriend = "user.friend.remove",
        SetAvatar = "user.avatar.set",
        GetChannels = "user.channels.get",
    }

    export enum Server {
        Create = "server.create",
        Delete = "server.delete",
    }
}
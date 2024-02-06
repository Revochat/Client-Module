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
    }

    export enum User {
        Create = "user.create",
        Get = "user.get",
        Connect = "user.connect",
        AddFriend = "user.friend.add",
        GetFriendsReceived = "user.friends.received.get",
        RemoveFriend = "user.friend.remove",
        SetAvatar = "user.avatar.set",
    }

    export enum Server {
        Create = "server.create",
    }
}
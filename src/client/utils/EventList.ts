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
        GetChannels = "user.channels.get",
        GetFriends = "user.friends.get", // get the user's friends when they change
        GetFriendsList = "user.friends.list.get", // get the user's friends list
        GetFriendRequestsSent = "user.friend.requests.sent.get", // get the user's friend requests sent
        GetFriendRequestsReceived = "user.friend.requests.received.get", // get the user's friend requests received
        Connect = "user.connect",
        AddFriend = "user.friend.add",
        RemoveFriend = "user.friend.remove",
        SetAvatar = "user.avatar.set"
    }

    export enum Server {
        Create = "server.create",
        Delete = "server.delete",
    }
}
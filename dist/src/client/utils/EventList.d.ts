export declare namespace EventList {
    enum Message {
        Send = "message.send",
        Delete = "message.delete",
        SendFile = "message.sendFile"
    }
    enum Channel {
        Create = "channel.create",
        Get = "channel.get",
        Join = "channel.join",
        GetAll = "channel.get.all"
    }
    enum User {
        Create = "user.create",
        Get = "user.get",
        GetChannels = "user.channels.get",
        GetFriends = "user.friends.get",
        GetFriendsList = "user.friends.list.get",
        GetFriendsReceivedList = "user.friends.received.list.get",
        GetFriendRequestsSent = "user.friend.requests.sent.get",
        GetFriendRequestsReceived = "user.friend.requests.received.get",
        Connect = "user.connect",
        AddFriend = "user.friend.add",
        RemoveFriend = "user.friend.remove",
        SetAvatar = "user.avatar.set"
    }
    enum Server {
        Create = "server.create",
        Delete = "server.delete"
    }
}
//# sourceMappingURL=EventList.d.ts.map
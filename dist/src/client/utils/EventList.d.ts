export declare namespace EventList {
    enum Message {
        Send = "message.send",
        Delete = "message.delete",
        SendFile = "message.sendFile"
    }
    enum Channel {
        Create = "channel.create",
        Delete = "channel.delete",
        Error = "channel.error",
        Get = "channel.get",
        Listen = "channel.listen",
        Join = "channel.join"
    }
    enum User {
        Create = "user.create",
        Delete = "user.delete",
        Error = "user.error",
        Get = "user.get",
        Connect = "user.connect",
        AddFriend = "user.friend.add",
        RemoveFriend = "user.friend.remove",
        SetAvatar = "user.avatar.set"
    }
    enum Server {
        Error = "server.error",
        Create = "server.create"
    }
    namespace Error {
        enum Message {
            ChannelNotFound = "Channel Not Found",
            UserNotFound = "User Not Found",
            MessageNotFound = "Message Not Found",
            NotAllowed = "Not Allowed",
            NotConnected = "Not Connected",
            NotInChannel = "Not In Channel",
            NotOwner = "Not Owner",
            NotFriend = "Not Friend",
            NotInServer = "Not In Server",
            NotInGroup = "Not In Group",
            NotInPrivate = "Not In Private",
            NotInPublic = "Not In Public",
            NotInDM = "Not In DM",
            NotInGuild = "Not In Guild",
            NotInTeam = "Not In Team",
            NotInVoice = "Not In Voice",
            NotInText = "Not In Text",
            NotInCategory = "Not In Category"
        }
        enum Channel {
            NotFound = "Channel Not Found",
            NotAllowed = "Not Allowed",
            NotInChannel = "Not In Channel",
            NotOwner = "Not Owner"
        }
        enum User {
            NotFriend = "Not Friend",
            NotInServer = "Not In Server",
            NotInGroup = "Not In Group",
            NotInPrivate = "Not In Private",
            NotInPublic = "Not In Public",
            NotInDM = "Not In DM",
            NotInGuild = "Not In Guild",
            NotInTeam = "Not In Team",
            NotInVoice = "Not In Voice",
            NotInText = "Not In Text",
            NotInCategory = "Not In Category",
            Blocked = "Blocked",
            NotBlocked = "Not Blocked",
            NotAllowed = "Not Allowed",
            NotConnected = "Not Connected",
            NotInChannel = "Not In Channel",
            NotOwner = "Not Owner",
            NotFound = "User Not Found"
        }
        enum Server {
            NotFound = "Server Not Found",
            NotAllowed = "Not Allowed",
            NotInServer = "Not In Server",
            NotOwner = "Not Owner",
            NotPermission = "Not Permission"
        }
        enum Socket {
            NotConnected = "Not Connected",
            NoConnection = "No Connection",
            NotAllowed = "Not Allowed",
            Timeout = "Timeout Error",
            NotPermission = "Not Permission",
            Disconnected = "Disconnected from server"
        }
    }
}
//# sourceMappingURL=EventList.d.ts.map
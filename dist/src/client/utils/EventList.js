"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventList = void 0;
var EventList;
(function (EventList) {
    let Message;
    (function (Message) {
        Message["Send"] = "message.send";
        Message["Delete"] = "message.delete";
        Message["SendFile"] = "message.sendFile";
    })(Message = EventList.Message || (EventList.Message = {}));
    let Channel;
    (function (Channel) {
        Channel["Create"] = "channel.create";
        Channel["Delete"] = "channel.delete";
        Channel["Error"] = "channel.error";
        Channel["Get"] = "channel.get";
        Channel["Listen"] = "channel.listen";
        Channel["Join"] = "channel.join";
    })(Channel = EventList.Channel || (EventList.Channel = {}));
    let User;
    (function (User) {
        User["Create"] = "user.create";
        User["Delete"] = "user.delete";
        User["Error"] = "user.error";
        User["Get"] = "user.get";
        User["Connect"] = "user.connect";
        User["AddFriend"] = "user.friend.add";
        User["RemoveFriend"] = "user.friend.remove";
        User["SetAvatar"] = "user.avatar.set";
    })(User = EventList.User || (EventList.User = {}));
    let Server;
    (function (Server) {
        Server["Error"] = "server.error";
        Server["Create"] = "server.create";
    })(Server = EventList.Server || (EventList.Server = {}));
    let Error;
    (function (Error) {
        let Message;
        (function (Message) {
            Message["ChannelNotFound"] = "Channel Not Found";
            Message["UserNotFound"] = "User Not Found";
            Message["MessageNotFound"] = "Message Not Found";
            Message["NotAllowed"] = "Not Allowed";
            Message["NotConnected"] = "Not Connected";
            Message["NotInChannel"] = "Not In Channel";
            Message["NotOwner"] = "Not Owner";
            Message["NotFriend"] = "Not Friend";
            Message["NotInServer"] = "Not In Server";
            Message["NotInGroup"] = "Not In Group";
            Message["NotInPrivate"] = "Not In Private";
            Message["NotInPublic"] = "Not In Public";
            Message["NotInDM"] = "Not In DM";
            Message["NotInGuild"] = "Not In Guild";
            Message["NotInTeam"] = "Not In Team";
            Message["NotInVoice"] = "Not In Voice";
            Message["NotInText"] = "Not In Text";
            Message["NotInCategory"] = "Not In Category";
        })(Message = Error.Message || (Error.Message = {}));
        let Channel;
        (function (Channel) {
            Channel["NotFound"] = "Channel Not Found";
            Channel["NotAllowed"] = "Not Allowed";
            Channel["NotInChannel"] = "Not In Channel";
            Channel["NotOwner"] = "Not Owner";
        })(Channel = Error.Channel || (Error.Channel = {}));
        let User;
        (function (User) {
            User["NotFriend"] = "Not Friend";
            User["NotInServer"] = "Not In Server";
            User["NotInGroup"] = "Not In Group";
            User["NotInPrivate"] = "Not In Private";
            User["NotInPublic"] = "Not In Public";
            User["NotInDM"] = "Not In DM";
            User["NotInGuild"] = "Not In Guild";
            User["NotInTeam"] = "Not In Team";
            User["NotInVoice"] = "Not In Voice";
            User["NotInText"] = "Not In Text";
            User["NotInCategory"] = "Not In Category";
            User["Blocked"] = "Blocked";
            User["NotBlocked"] = "Not Blocked";
            User["NotAllowed"] = "Not Allowed";
            User["NotConnected"] = "Not Connected";
            User["NotInChannel"] = "Not In Channel";
            User["NotOwner"] = "Not Owner";
            User["NotFound"] = "User Not Found";
        })(User = Error.User || (Error.User = {}));
        let Server;
        (function (Server) {
            Server["NotFound"] = "Server Not Found";
            Server["NotAllowed"] = "Not Allowed";
            Server["NotInServer"] = "Not In Server";
            Server["NotOwner"] = "Not Owner";
            Server["NotPermission"] = "Not Permission";
        })(Server = Error.Server || (Error.Server = {}));
        let Socket;
        (function (Socket) {
            Socket["NotConnected"] = "Not Connected";
            Socket["NoConnection"] = "No Connection";
            Socket["NotAllowed"] = "Not Allowed";
            Socket["Timeout"] = "Timeout Error";
            Socket["NotPermission"] = "Not Permission";
            Socket["Disconnected"] = "Disconnected from server";
        })(Socket = Error.Socket || (Error.Socket = {}));
    })(Error = EventList.Error || (EventList.Error = {}));
})(EventList || (exports.EventList = EventList = {}));

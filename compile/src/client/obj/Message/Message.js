"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const Event_1 = require("./Event");
const Sender_1 = require("./Sender");
var Message;
(function (Message) {
    // export Sender and Event
    Message.Sender = Sender_1.MessageSender;
    Message.Event = Event_1.MessageEvent;
})(Message || (exports.Message = Message = {}));

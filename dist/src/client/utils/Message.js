"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const Message_1 = require("../obj/Message/Message");
class Message {
    constructor(socket, options) {
        this.socket = socket;
    }
    send(data) {
        return Message_1.MessageObject.send(this.socket, data);
    }
}
exports.Message = Message;

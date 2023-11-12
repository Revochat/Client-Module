"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Send = void 0;
const Message_1 = require("../obj/Message/Message");
class Send {
    constructor(socket) {
        this.socket = socket;
    }
    message(request) {
        return Message_1.Message.Sender.message(this.socket, request);
    }
    attachment(request) {
        return Message_1.Message.Sender.Attachment(this.socket, request);
    }
}
exports.Send = Send;

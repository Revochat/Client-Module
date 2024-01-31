"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const Message_1 = require("../obj/Message/Message");
class Message {
    constructor(socket, options) {
        this.socket = socket;
        this.options = options;
    }
    send(data) {
        return Message_1.MessageObject.send(this.socket, data);
    }
    delete(data) {
        return Message_1.MessageObject.delete(this.socket, data);
    }
    sendFile(serverUrl, token, channelId, formData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const link = yield Message_1.MessageObject.sendFile(serverUrl, token, channelId, formData);
                return link;
            }
            catch (_a) {
                return null;
            }
        });
    }
}
exports.Message = Message;

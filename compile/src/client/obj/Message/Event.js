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
exports.Event = void 0;
class Event {
    constructor(message, socket) {
        this.message_id = message.message_id;
        this.channel_id = message.channel_id;
        this.message = message.message;
        this.user_id = message.user_id;
        this.created_at = message.created_at;
        this.socket = socket;
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.socket.emit('delete', JSON.stringify({
                    message_id: this.message_id
                }));
                this.socket.once('delete', (data) => {
                    resolve();
                });
                setTimeout(() => {
                    reject('timeout');
                }, 5000);
            });
        });
    }
}
exports.Event = Event;

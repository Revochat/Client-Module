"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
const Channel_1 = require("../obj/Channel/Channel");
class Channel {
    constructor(socket, options) {
        this.socket = socket;
    }
    create(data) {
        return Channel_1.ChannelObject.create(this.socket, data);
    }
    join(data) {
        return Channel_1.ChannelObject.join(this.socket, data);
    }
    get(data) {
        return Channel_1.ChannelObject.get(this.socket, data);
    }
}
exports.Channel = Channel;

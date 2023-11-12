"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const socket_io_client_1 = require("socket.io-client");
const Send_1 = require("./utils/Send");
const Connect_1 = require("./utils/Connect");
const On_1 = require("./utils/On");
const Emit_1 = require("./utils/Emit");
class Client {
    constructor(options) {
        this.options = options;
        this.socket = (0, socket_io_client_1.io)(options.url);
        this.send = new Send_1.Send(this.socket);
        this.login = new Connect_1.Connect(this.socket, this.options);
    }
    on(event, fn) {
        On_1.On.addListener(this.socket, event, fn);
    }
    emit(event, data) {
        Emit_1.Emit.emit(this.socket, event, data);
    }
}
exports.Client = Client;

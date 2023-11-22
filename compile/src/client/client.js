"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const socket_io_client_1 = require("socket.io-client");
const Send_1 = require("./utils/Send");
const Connect_1 = require("./utils/Connect");
const On_1 = require("./utils/On");
const User_1 = require("./utils/User");
class Client {
    constructor(options) {
        this.options = options;
        this.socket = (0, socket_io_client_1.io)(options.url, { transports: ["websocket"] });
        this.send = new Send_1.Send(this.socket);
        this.connect = new Connect_1.Connect(this.socket, this.options);
        this.user = new User_1.User(this.socket, this.options);
    }
    on(event, fn) {
        this.socket.on(event, (data) => {
            if (this.options.debug)
                console.log("[DEBUG] EVENT: " + event + " DATA: " + data);
            On_1.On.addListener(event, data);
            fn(data);
        });
    }
    onAny(fn) {
        this.socket.onAny((event, data) => {
            if (this.options.debug)
                console.log("[DEBUG] EVENT: " + event + " DATA: " + data);
            On_1.On.addListener(event, data);
            fn(event, data);
        });
    }
    emit(event, data) {
        this.socket.emit(event, data);
        if (this.options.debug)
            console.log("[DEBUG] EMIT: " + event + " DATA: " + data);
    }
    login(token) {
        return this.connect.login(token);
    }
}
exports.Client = Client;

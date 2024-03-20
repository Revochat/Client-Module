"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const socket_io_client_1 = require("socket.io-client");
const Message_1 = require("./utils/Message");
const Connect_1 = require("./utils/Connect");
const On_1 = require("./utils/On");
const User_1 = require("./utils/User");
const Channel_1 = require("./utils/Channel");
const Server_1 = require("./utils/Server");
class Client {
    constructor(options) {
        this.close = () => {
            this.socket.close();
        };
        this.options = options;
        this.socket = (0, socket_io_client_1.io)(options.url, { transports: ["websocket"] });
        this.message = new Message_1.Message(this.socket, this.options);
        this.connect = new Connect_1.Connect(this.socket, this.options);
        this.user = new User_1.User(this.socket, this.options);
        this.channel = new Channel_1.Channel(this.socket, this.options);
        this.server = new Server_1.Server(this.socket, this.options);
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

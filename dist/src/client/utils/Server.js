"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const Server_1 = require("../obj/Server/Server");
class Server {
    constructor(socket, options) {
        this.socket = socket;
    }
    create(data) {
        return Server_1.ServerObject.create(this.socket, data);
    }
    delete(data) {
        return Server_1.ServerObject.delete(this.socket, data);
    }
}
exports.Server = Server;

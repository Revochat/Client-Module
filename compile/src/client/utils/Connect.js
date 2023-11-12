"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connect = void 0;
const socket_io_client_1 = require("socket.io-client");
class Connect {
    constructor(socket, options) {
        this.socket = socket;
        this.options = options;
    }
    login(url, token) {
        return new Promise((resolve, reject) => {
            this.socket = (0, socket_io_client_1.io)(url);
            this.socket.on("connect", () => {
                this.socket.emit("conn", JSON.stringify({
                    token: token
                }));
                this.socket.once('conn', (data) => {
                    if (this.options.debug)
                        console.log("[DEBUG] CONNECTED: " + data);
                    if (data.error)
                        return reject(data.error);
                    resolve();
                });
            });
            this.socket.once("disconnect", () => {
                if (this.options.debug)
                    console.log("[DEBUG] DISCONNECT");
                reject('disconnect');
            });
            this.socket.once("error", (error) => {
                if (this.options.debug)
                    console.log("[DEBUG] ERROR: " + error);
                reject(error);
            });
            setTimeout(() => {
                if (this.socket.connected)
                    return;
                reject('timeout');
            }, 5000);
        });
    }
}
exports.Connect = Connect;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connect = void 0;
const EventList_1 = require("./EventList");
class Connect {
    constructor(socket, options) {
        this.socket = socket;
        this.options = options;
    }
    login(token) {
        return new Promise((resolve, reject) => {
            this.socket.on("connect", () => {
                this.socket.emit(EventList_1.EventList.User.Connect, token);
                this.socket.once(EventList_1.EventList.User.Connect, (data) => {
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
                this.socket.removeAllListeners();
                this.socket.disconnect();
                reject('Socket disconnected');
            });
            this.socket.once("error", (error) => {
                if (this.options.debug)
                    console.log("[DEBUG] ERROR: " + error);
                reject(error);
            });
            setTimeout(() => {
                if (this.socket.connected)
                    return;
                reject("Socket Connexion timeout");
            }, 5000);
        });
    }
}
exports.Connect = Connect;

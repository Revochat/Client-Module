"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const events_1 = __importDefault(require("events"));
const socket_io_client_1 = require("socket.io-client");
const messages_1 = require("./messages");
const friends_1 = require("./friends");
const user_1 = require("./user");
const channel_1 = require("./channel");
class Client extends events_1.default {
    Socket = (0, socket_io_client_1.io)(require('../../config.json').URI);
    message = new messages_1.Message(this.Socket);
    friend = new friends_1.Friend(this.Socket);
    user = new user_1.User(this.Socket);
    channels = new channel_1.Channel(this.Socket);
    constructor() {
        super();
        this.Socket.on('connect', () => {
            this.Socket.onAny((event, ...args) => {
                this.emit(event, ...args);
            });
        });
    }
    login(token) {
        this.Socket.emit('login', token);
        return new Promise((resolve, reject) => {
            this.Socket.on('login', (data) => {
                if (data) {
                    resolve();
                }
                else {
                    reject("Invalid token");
                }
            });
        });
    }
}
exports.Client = Client;

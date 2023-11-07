"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revochat = void 0;
const client_1 = require("./src/client/client");
exports.Revochat = {
    Client: client_1.Client
};
const client = new exports.Revochat.Client({
    url: "ws://localhost:8080",
    token: "token"
});
client.connect();

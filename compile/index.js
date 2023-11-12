"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revochat = void 0;
const client_1 = require("./src/client/client");
exports.Revochat = {
    Client: client_1.Client
};
// EXEMPLE OF USAGE
const client = new exports.Revochat.Client({
    url: "ws://localhost:5000",
    token: "token",
    debug: true,
});
client.on("message", (data) => {
    console.log(data);
});
client.on("connect", () => {
    console.log("Connected!");
});
client.on("message", (data) => {
    console.log(data);
});

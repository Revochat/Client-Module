"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../src"));
const client = new src_1.default.Client(); // Create a new client for the sender of the message
const client2 = new src_1.default.Client(); // Create a new client for the receiver of the message
const channelID = 1678957677332; // Channel ID of the channel where the message will be sent
(async () => {
    await client.login("441A9FEFE7AA543C8B99F44A7A05819E1676727077194"); // luxlux2 account token -> sender of the message
    await client2.login("B646A3D1A7695561BAB6B1C98D4C2AD51677928766404"); // luxlux account token -> receiver of the message
    setInterval(() => {
        client.message.send(channelID, "Hi everyone, this is a test message!"); // Send a message to the channel
    }, 5000);
    client2.on('messageCreate', (message) => {
        console.log(message); // Log the message to the console
    });
})();

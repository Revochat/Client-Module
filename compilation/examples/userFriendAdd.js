"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../src"));
const client = new src_1.default.Client(); // Create a new client
(async () => {
    await client.login("441A9FEFE7AA543C8B99F44A7A05819E1676727077194"); // luxlux2 account token
    const friendID = 1678272658965; // ThomasJan account ID
    client.friend.add(friendID); // Add ThomasJan as a friend
    client.friend.remove(friendID); // Remove ThomasJan as a friend
})();

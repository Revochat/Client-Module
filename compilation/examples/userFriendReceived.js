"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require("../"));
const client = new __1.default.Client(); // Create a new client
(async () => {
    await client.login("441A9FEFE7AA543C8B99F44A7A05819E1676727077194"); // luxlux2 account token
    const res = await client.friend.received; // Get the list of friend requests received by the logged in user
    console.log(res); // Log the list of friend requests to the console
})();

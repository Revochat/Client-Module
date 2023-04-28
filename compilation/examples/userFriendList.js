"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../src"));
const client = new src_1.default.Client(); // Create a new client
(async () => {
    await client.login("441A9FEFE7AA543C8B99F44A7A05819E1676727077194"); // luxlux2 account token
    console.log(await client.friend.list);
})();

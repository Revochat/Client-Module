"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("./src"));
const client = new src_1.default.Client();
const client2 = new src_1.default.Client();
setTimeout(() => {
    client.login("B646A3D1A7695561BAB6B1C98D4C2AD51677928766404")
        .then(() => {
        client.message.send(1678274559826, "Hello world!");
    })
        .catch((err) => {
        console.log(err);
    });
}, 1500);
client2.login("441A9FEFE7AA543C8B99F44A7A05819E1676727077194").then(() => {
    client2.on('messageCreate', (data) => {
        console.log(data);
    });
}).catch((err) => {
    console.log(err);
});

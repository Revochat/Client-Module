"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revochat = void 0;
const client_1 = require("./src/client/client");
exports.Revochat = {
    Client: client_1.Client
};
// EXEMPLE OF USAGE
const client = new exports.Revochat.Client({
    url: "ws://localhost:3001",
    debug: true,
});
try {
    client.login("AA8626981F135A068E14779DB8F78DA81699436137576");
    client.on("user.connect", (user) => {
        if (user.error)
            return console.log(user.error);
        console.log(user);
        console.log("Connected as " + user.username + " (" + user.user_id + ")");
        console.log("You have " + user.friends.length + " friends");
        console.log("Adding friend...");
        client.user.addFriend("thomas");
        console.log("You have " + user.friends.length + " friends");
    });
    client.on("user.add.friend", (user) => {
        if (user.error)
            return console.log(user.error);
        console.log(user);
    });
}
catch (error) {
    console.log(error);
}
// client.on("message.receive", (message) => {
//     if(message.error) return console.log(message.error)
//     console.log(message)
// })
// client.on("message.send", (message) => {
//     if(message.error) return console.log(message.error)
//     console.log(message)
// })

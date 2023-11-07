import {Client} from "./src/client/client"
export const Revochat = {
    Client: Client
}


// EXEMPLE OF USAGE


const client = new Revochat.Client({
    url: "ws://localhost:5000",
    token: "token",
    debug: true,
});

client.revoConnect() 
    .then(() => {
        console.log("Woohoo connected!");
    })
    .catch((error) => {
        console.log("Error connecting: " + error);
})

client.on("message", (data) => {
    console.log(data);
});

client.on("connect", () => {
    console.log("Connected!");
})
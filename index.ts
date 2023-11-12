import {Client} from "./src/client/client"
export const Revochat = {
    Client: Client
}


// EXEMPLE OF USAGE


const client = new Revochat.Client({
    url: "ws://localhost:5000",
    debug: true,
})

client.login("AA8626981F135A068E14779DB8F78DA81699436137576")

client.on("user.connect", (data) => {
    if(data.error) return console.log(data.error)
    console.log("Connected as " + data.username +  " (" + data.user_id + ")")
})


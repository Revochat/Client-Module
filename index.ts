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

client.on("user.connect", (user) => {
    if(user.error) return console.log(user.error)
    console.log(user)
    console.log("Connected as " + user.username +  " (" + user.user_id + ")")  
    console.log("You have " + user.friends.length + " friends")
})

client.on("message.receive", (message) => {
    if(message.error) return console.log(message.error)
    console.log(message)
})


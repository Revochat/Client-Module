import {Revochat} from "../index"

const client = new Revochat.Client({
    url: "ws://localhost:3001",
    debug: true,
})

try {
    client.login("FAF395DFF11C5457B3768E195E18794E1705500854372") // lux
    // client.login("E2A834F0272A5667A3DC1B702E14301F1699433661592") // thomas

    client.on("user.connect", (user) => {
        if(user.error) return console.log(user.error)
        console.log(user)
        console.log("Connected as " + user.username +  " (" + user.user_id + ")")  
        console.log("You have " + user.friends.length + " friends")

        console.log("Sending message...")
        // client.message.send({channel_id: "1702227919397", message: "test"})

        setInterval(() => {
            client.message.send({channel_id: "65a7ec1b44471bc0b07e80d9", message: "test"})
        }, 5000)
    })

    client.on("message.send", (message) => {
        if(message.error) return console.log(message.error)
        console.log(message)
    })
    
} catch (error) {
    console.log(error)
}
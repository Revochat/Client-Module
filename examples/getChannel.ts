import {Revochat} from "../index"

const client = new Revochat.Client({
    url: "ws://localhost:3001",
    debug: true,
})

try {
    client.login("F10E0584D4955A93AB36C0B5C5B363021702227938667") // lux
    // client.login("E2A834F0272A5667A3DC1B702E14301F1699433661592") // thomas

    client.on("user.connect", (user) => {
        if(user.error) return console.log(user.error)
        console.log(user)
        console.log("Connected as " + user.username +  " (" + user.user_id + ")")  
        console.log("You have " + user.friends.length + " friends")

        client.channel.get({ channel_id: "1703087621729", limit: 25 }).catch((error) => {
            console.log(error)
        })
    })

    client.on("channel.get", (message) => {
        console.log(message)
    })

    
} catch (error) {
    console.log(error)
}
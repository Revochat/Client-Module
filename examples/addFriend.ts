import {Revochat} from "../index"

const client = new Revochat.Client({
    url: "ws://localhost:3001",
    debug: true,
})

try {
    // client.login("AA8626981F135A068E14779DB8F78DA81699436137576") // lux
    client.login("E2A834F0272A5667A3DC1B702E14301F1699433661592") // thomas

    client.on("user.connect", (user) => {
        if(user.error) return console.log(user.error)
        console.log(user)
        console.log("Connected as " + user.username +  " (" + user.user_id + ")")  
        console.log("You have " + user.friends.length + " friends")
    
        console.log("Adding friend...")
        client.user.addFriend({friend_id: "lux"})
    })

    client.on("user.friend.add", (user) => {
        if(user.error) return console.log(user.error)
        console.log(user)
    })
    
} catch (error) {
    console.log(error)
}
import {Revochat} from "../index"

const client = new Revochat.Client({
    url: "ws://localhost:3001",
    debug: true,
})

try {
    // client.login("AA8626981F135A068E14779DB8F78DA81699436137576") // lux
    client.login("FAF395DFF11C5457B3768E195E18794E1705500854372") // thomas

    client.on("user.connect", (user) => {
        if(user.error) return console.log(user.error)
        console.log(user)
        console.log("Connected as " + user.username +  " (" + user.user_id + ")")  
        console.log("You have " + user.friends.length + " friends")
    })
    
} catch (error) {
    console.log(error)
}
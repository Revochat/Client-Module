import {Revochat} from "../index"

const client = new Revochat.Client({
    url: "ws://localhost:3001",
    debug: true,
})

try {
    // client.login("AA8626981F135A068E14779DB8F78DA81699436137576") // lux
    client.login("E90E83039D0F59F39BDBC46EF47573541703084270492") // thomas

    client.on("user.connect", (user) => {
        if(user.error) return console.log(user.error)
        console.log(user)
        console.log("Connected as " + user.username +  " (" + user.user_id + ")")  
        console.log("You have " + user.friends.length + " friends")
    })
    
} catch (error) {
    console.log(error)
}
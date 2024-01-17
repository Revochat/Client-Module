import {Revochat} from "../index"

const client = new Revochat.Client({
    url: "ws://localhost:3001",
    debug: true,
})

try {
    client.login("F10E0584D4955A93AB36C0B5C5B363021702227938668")
    
    client.on("user.connect", (user) => {
        if(user.error) return console.log(user.error)
        console.log(user)
        console.log("Connected as " + user.username +  " (" + user.user_id + ")")  
        console.log("You have " + user.friends.length + " friends")
    
        console.log("Adding friend...")
        client.user.addFriend({username: "lux"}).catch((error) => {
            console.log(error)
        })
    })

    client.on("user.friend.add", (user) => {
        if(user.error) return console.log(user.error)
        console.log(user)
    })
    
} catch (error) {
    console.log(error)
}
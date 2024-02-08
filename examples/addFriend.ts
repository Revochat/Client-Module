import { Revochat } from "../index"
import { EventList } from "../src/client/utils/EventList"
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables from .env file 

try {
    const USER2_TOKEN = process.env.USER2_TOKEN
    if(!USER2_TOKEN) throw new Error("USER1_TOKEN is not defined in .env file")

    const URL = process.env.URL
    if(!URL) throw new Error("URL is not defined in .env file")

    const client = new Revochat.Client({
        url: URL,
        debug: true,
    })

    client.login(USER2_TOKEN) // login with token
    
    client.on(EventList.User.Connect, (user) => {
        if(user.error) return console.log(user.error)
        console.log(user)
        console.log("Connected as " + user.username +  " (" + user.user_id + ")")  
        console.log("You have " + user.friends.length + " friends")
    
        console.log("Adding friend...")
        client.user.addFriend({username: "lux"}).catch((error) => {
            console.log(error)
        })
    })

    client.on(EventList.User.AddFriend, (user) => {
        if(user.error) return console.log(user.error)
        console.log(user)
    })
    
} catch (error) {
    console.log(error)
}


// try {
//     client.login("D7B6F994D4C35B299214233F1869F9991705493205366")
    
//     client.on("user.connect", (user) => {
//         if(user.error) return console.log(user.error)
//         console.log(user)
//         console.log("Connected as " + user.username +  " (" + user.user_id + ")")  
//         console.log("You have " + user.friends.length + " friends")
    
//         console.log("Adding friend...")
//         client.user.addFriend({username: "lux"}).catch((error) => {
//             console.log(error)
//         })
//     })

//     client.on("user.friend.add", (user) => {
//         if(user.error) return console.log(user.error)
//         console.log(user)
//     })
    
// } catch (error) {
//     console.log(error)
// }
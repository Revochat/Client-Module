import {Revochat} from "../index"
import { EventList } from "../src/client/utils/EventList"
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables from .env file 

try {
    const USER1_TOKEN = process.env.USER1_TOKEN
    if(!USER1_TOKEN) throw new Error("USER1_TOKEN is not defined in .env file")

    const URL = process.env.URL
    if(!URL) throw new Error("URL is not defined in .env file")

    const client = new Revochat.Client({
        url: URL,
        debug: true,
    })

    client.login(USER1_TOKEN) // login with token

    client.on(EventList.User.Connect, (user) => {
        if(user.error) return console.log(user.error)
        console.log(user)
        console.log("Connected as " + user.username +  " (" + user.user_id + ")")  
        console.log("You have " + user.friends.length + " friends")

        console.log("Sending message...")
        // client.message.send({channel_id: "1702227919397", message: "test"})

        setInterval(() => {
            client.message.send({channel_id: "65a7f3bae270ef8e5656dc6b", message: "ilyes test delete"})
        }, 5000)
    })

    client.on(EventList.Message.Send, (message) => {
        if(message.error) return console.log(message.error)
        console.log(message)
    })
    
} catch (error) {
    console.log(error)
}
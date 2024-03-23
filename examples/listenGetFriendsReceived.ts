import { Revochat } from "../index"
import { EventList } from "../src/client/utils/EventList"
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables from .env file 

try {
    const USER2_TOKEN = process.env.USER2_TOKEN
    if(!USER2_TOKEN) throw new Error("USER2_TOKEN is not defined in .env file")

    const URL = process.env.URL
    if(!URL) throw new Error("URL is not defined in .env file")

    const client = new Revochat.Client({
        url: URL,
        debug: true,
    })

    client.login(USER2_TOKEN) // login with token
    
    client.on(EventList.User.Connect, (user) => {
        if(user.error) return console.log(user.error)
    })

    client.on(EventList.User.GetFriendRequestsReceived, (user) => {
        console.log(user)
    })
    
} catch (error) {
    console.log(error)
}
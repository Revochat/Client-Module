import { Revochat } from "../index";
import { EventList } from "../src/client/utils/EventList";
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
        if (user.error) return console.log(user.error);
        console.log("Connected as " + user.username + " (" + user.user_id + ")");
        console.log("You have " + user.friends.length + " friends");

        console.log("Deleting server...");
        client.server.delete({ server_id: "65c4eff881056c07f73cd0de" });
    });

    client.on(EventList.Server.Delete, (data) => {
        if (data.error) return console.log(data.error);
        console.log("Server deleted successfully");
    })
} catch (error) {
    console.error(error);
}

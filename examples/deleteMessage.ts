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

        // Replace this with the actual message ID and channel ID you want to delete
        const messageID = "65afd272cf19e0484b0e568c";
        const ChannelID = "65a7f3bae270ef8e5656dc6b";

        console.log("Deleting message...");
        if (messageID) {
            client.message.delete({ message_id: messageID, channel_id: ChannelID });
        } else {
            console.log("Invalid message ID");
        }
    });

    client.on("message.delete", (response) => {
        if (response.error) return console.error(response.error);
        console.log("Message deleted successfully");
    });
} catch (error) {
    console.error(error);
}

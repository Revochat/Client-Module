import { Revochat } from "../index"
import { EventList } from "../src/client/utils/EventList"
import fs from "fs"
import path from "path"
import FormData from "form-data";
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

    client.on(EventList.User.Connect, async (user) => {
        if (user.error) return console.log(user.error)
        console.log("Connected as " + user.username + " (" + user.user_id + ")")
        console.log("You have " + user.friends.length + " friends")

        // create a file
        const formData = new FormData();
        const filePath = path.join("/home/lux/Pictures/Frame_22.png");
        const fileStream = fs.createReadStream(filePath);

        formData.append('file', fileStream, path.basename(filePath));

        const link = await client.user.setAvatar("http://localhost:4000", USER1_TOKEN, "65a7e0c367c3fa98fedd37b6", formData)
        console.log(link)
    })

    client.on(EventList.User.SetAvatar, (result) => {
        if (result.error) return console.error("Error:", result.error);
        console.log("Avatar set:", result);
    })

} catch (error) {
    console.error("Error:", error);
}
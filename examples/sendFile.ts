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

        // client.message.sendFile(new File(["Hello, World!"], "hello.txt"), "5f9e9b7b9b9b9b9b9b9b9b9b", "AA8626981F135A068E14779DB8F78DA81699436137576")
        const link = await client.message.sendFile("http://localhost:4000", "F10E0584D4955A93AB36C0B5C5B363021702227938667", "1702227951051", formData)
        console.log(link)
    })

} catch (error) {
    console.error("Error:", error);
}
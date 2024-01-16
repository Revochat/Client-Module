import { Revochat } from "../index"
import fs from "fs"
import path from "path"
import FormData from "form-data";

const client = new Revochat.Client({
    url: "ws://localhost:3001",
    debug: true,
})


function prepareFormData(filePath: string): FormData {
    const formData = new FormData();
    const fileStream = fs.createReadStream(filePath);
    
    formData.append('file', fileStream, path.basename(filePath));

    return formData;
}

try {
    client.login("D980F829ACA755A8BADB470CFB313A731705433445372") // lux

    client.on("user.connect", async (user) => {
        if (user.error) return console.log(user.error)
        console.log("Connected as " + user.username + " (" + user.user_id + ")")
        console.log("You have " + user.friends.length + " friends")

        // create a file
        const formData = new FormData();
        const filePath = path.join("/home/lux/Pictures/Frame_22.png");
        const fileStream = fs.createReadStream(filePath);

        formData.append('file', fileStream, path.basename(filePath));

        // client.message.sendFile(new File(["Hello, World!"], "hello.txt"), "5f9e9b7b9b9b9b9b9b9b9b9b", "AA8626981F135A068E14779DB8F78DA81699436137576")
        const link = await client.message.sendFile("http://localhost:4000", "D980F829ACA755A8BADB470CFB313A731705433445372", "1702227951051", formData)
        console.log(link)
    })

} catch (error) {
    console.error("Error:", error);
}
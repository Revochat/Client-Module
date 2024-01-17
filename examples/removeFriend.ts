import { Revochat } from "../index"

const client = new Revochat.Client({
    url: "ws://localhost:3001",
    debug: true,
})

try {
    client.login("F10E0584D4955A93AB36C0B5C5B363021702227938667") // lux

    client.on("user.connect", async (user) => {
        if (user.error) return console.log(user.error)
        console.log("Connected as " + user.username + " (" + user.user_id + ")")
        console.log("You have " + user.friends.length + " friends")

        const usernameToRemove = "65a79afd7c58f03e301ae8da"; // ID de l'ami à supprimer
        try {
            client.emit("remove.friend", { username: usernameToRemove });
            console.log("try to remove friend with ID:", usernameToRemove);
        } catch (error) {
            console.error("Error sending remove.friend event:", error);
        }
    })

    client.on("remove.friend", (result) => {
        if (result.error) return console.error("Error:", result.error);
        console.log("Friend removed:", result);
    })
} catch (error) {
    console.error("Error:", error);
}
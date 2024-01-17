import { Revochat } from "../index"
import { EventList } from "../src/client/utils/EventList"

const client = new Revochat.Client({
    url: "ws://localhost:3001",
    debug: true,
})

try {
    client.login("FAF395DFF11C5457B3768E195E18794E1705500854372") // lux

    client.on(EventList.User.Connect, async (user) => {
        if (user.error) return console.log(user.error)
        console.log("Connected as " + user.username + " (" + user.user_id + ")")
        console.log("You have " + user.friends.length + " friends")

        const usernameToRemove = "thomas"; // ID de l'ami à supprimer

        client.user.removeFriend({ username: usernameToRemove });
    })

    client.on(EventList.User.RemoveFriend, (result) => {
        if (result.error) return console.error("Error:", result.error);
        console.log("Friend removed:", result);
    })
} catch (error) {
    console.error("Error:", error);
}
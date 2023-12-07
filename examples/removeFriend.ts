import { Revochat } from "../index"

const client = new Revochat.Client({
    url: "ws://localhost:3001",
    debug: true,
})

try {
    client.login("AA8626981F135A068E14779DB8F78DA81699436137576") // lux

    client.on("user.connect", async (user) => {
        if (user.error) return console.log(user.error)
        console.log("Connected as " + user.username + " (" + user.user_id + ")")
        console.log("You have " + user.friends.length + " friends")

        const friendIdToRemove = "friend_user_id"; // ID de l'ami à supprimer
        try {
            client.emit("remove.friend", { friend_id: friendIdToRemove });
            console.log("Requested to remove friend with ID:", friendIdToRemove);
        } catch (error) {
            console.error("Error sending remove.friend event:", error);
        }
    })

    client.on("user.friend.remove", (result) => {
        if (result.error) return console.error("Error:", result.error);
        console.log("Friend removed:", result);
    })
} catch (error) {
    console.error("Error:", error);
}
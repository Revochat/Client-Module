import { Revochat } from "../index";

const client = new Revochat.Client({
    url: "ws://localhost:3001",
    debug: true,
});

try {
    client.login("FAF395DFF11C5457B3768E195E18794E1705500854372"); // lux

    client.on("user.connect", (user) => {
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

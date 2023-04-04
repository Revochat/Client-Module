import Revochat from "../src";

const client = new Revochat.Client(); // Create a new client

(async () => {
    await client.login("441A9FEFE7AA543C8B99F44A7A05819E1676727077194"); // luxlux2 account token

    const friendID: number = 1678272658965; // ThomasJan account ID

    client.friend.add(friendID) // Add ThomasJan as a friend

    client.friend.remove(friendID) // Remove ThomasJan as a friend
})();
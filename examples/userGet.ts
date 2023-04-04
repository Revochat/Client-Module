import Revochat from "../src";

const client = new Revochat.Client(); // Create a new client

(async () => {
    await client.login("441A9FEFE7AA543C8B99F44A7A05819E1676727077194"); // luxlux2 account token

    const res = await client.user.get() // Get the user data of the logged in user
    console.log(res) // Log the user data to the console
})();
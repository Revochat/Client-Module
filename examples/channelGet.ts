import Revochat from "../";

const client = new Revochat.Client(); // Create a new client

(async () => {
    await client.login("441A9FEFE7AA543C8B99F44A7A05819E1676727077194")
    console.log(await client.channels.get); // luxlux2 account token
})();
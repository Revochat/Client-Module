import { Revochat } from "../../index"
import { EventList } from "../../src/client/utils/EventList"
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables from .env file 

describe('connect', () => {

    const USER1_TOKEN = process.env.USER1_TOKEN
    if(!USER1_TOKEN) throw new Error("USER1_TOKEN is not defined in .env file")

    const URL = process.env.URL
    if(!URL) throw new Error("URL is not defined in .env file")

    const client = new Revochat.Client({
        url: URL,
        debug: true,
    })

    it('connect websockets response', (done) => {
        expect.assertions(1);

        client.login(USER1_TOKEN) // login with token

        client.on(EventList.User.Connect, (user) => {
                expect(user).toBeDefined();
                done();
            })
    });

    afterAll(() => {
        client.close(); // Close the WebSocket connection
    });
});
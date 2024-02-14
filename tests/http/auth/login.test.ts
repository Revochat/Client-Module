import { EventList } from "../../../src/client/utils/EventList"
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables from .env file 

describe('login', () => {

    const USER1_TOKEN = process.env.USER1_TOKEN
    if(!USER1_TOKEN) throw new Error("USER1_TOKEN is not defined in .env file")

    const API_URL = process.env.API_URL
    if(!API_URL) throw new Error("URL is not defined in .env file")

    const USER1_USERNAME = process.env.USER1_USERNAME
    if(!USER1_USERNAME) throw new Error("USER1_USERNAME is not defined in .env file")

    const USER1_PASSWORD = process.env.USER1_PASSWORD
    if(!USER1_PASSWORD) throw new Error("USER1_PASSWORD is not defined in .env file")

    it('login user', (done) => {
        expect.assertions(1);

        axios.post(`${API_URL}/user/auth/login`, {
            username: USER1_USERNAME,
            password: USER1_PASSWORD
        }).then((response) => {
            expect(response.data).toBeDefined();
            done();
        });
    });
});
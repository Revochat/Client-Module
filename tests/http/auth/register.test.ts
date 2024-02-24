import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables from .env file 

describe('register', () => {

    const API_URL = process.env.API_URL
    if(!API_URL) throw new Error("URL is not defined in .env file")

    const USER1_USERNAME = "user1"
    const USER1_PASSWORD = "password"

    it('register user', (done) => {
        expect.assertions(1);

        axios.post(`${API_URL}/user/auth/register`, {
            username: USER1_USERNAME,
            password: USER1_PASSWORD
        }).then((response) => {
            expect(response.data).toBeDefined();
            done();
        });
    });
});
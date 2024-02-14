import { EventList } from "../../src/client/utils/EventList"
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables from .env file 

describe('ping', () => {

    const API_URL = process.env.API_URL
    if(!API_URL) throw new Error("URL is not defined in .env file")

    it('ping api', (done) => {
        expect.assertions(1);

        axios.get(`${API_URL}/ping`, {
        }).then((response) => {
            expect(response.data).toBeDefined();
            done();
        });
    });
});
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables from .env file 
describe('register', () => {
    const API_URL = process.env.API_URL;
    if (!API_URL)
        throw new Error("URL is not defined in .env file");
    const USER1_USERNAME = "user1";
    const USER1_PASSWORD = "password";
    it('register user', (done) => {
        expect.assertions(1);
        axios_1.default.post(`${API_URL}/user/auth/register`, {
            username: USER1_USERNAME,
            password: USER1_PASSWORD
        }).then((response) => {
            expect(response.data).toBeDefined();
            done();
        });
    });
});

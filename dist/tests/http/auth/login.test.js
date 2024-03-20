"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables from .env file 
describe('login', () => {
    const USER1_TOKEN = process.env.USER1_TOKEN;
    if (!USER1_TOKEN)
        throw new Error("USER1_TOKEN is not defined in .env file");
    const API_URL = process.env.API_URL;
    if (!API_URL)
        throw new Error("URL is not defined in .env file");
    const USER1_USERNAME = process.env.USER1_USERNAME;
    if (!USER1_USERNAME)
        throw new Error("USER1_USERNAME is not defined in .env file");
    const USER1_PASSWORD = process.env.USER1_PASSWORD;
    if (!USER1_PASSWORD)
        throw new Error("USER1_PASSWORD is not defined in .env file");
    it('login user', (done) => {
        expect.assertions(1);
        axios_1.default.post(`${API_URL}/user/auth/login`, {
            username: USER1_USERNAME,
            password: USER1_PASSWORD
        }).then((response) => {
            expect(response.data).toBeDefined();
            done();
        });
    });
});

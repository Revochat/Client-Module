"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const EventList_1 = require("../../src/client/utils/EventList");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables from .env file 
describe('connect', () => {
    const USER1_TOKEN = process.env.USER1_TOKEN;
    if (!USER1_TOKEN)
        throw new Error("USER1_TOKEN is not defined in .env file");
    const URL = process.env.URL;
    if (!URL)
        throw new Error("URL is not defined in .env file");
    const client = new index_1.Revochat.Client({
        url: URL,
        debug: true,
    });
    it('connect websockets response', (done) => {
        expect.assertions(1);
        client.login(USER1_TOKEN); // login with token
        client.on(EventList_1.EventList.User.Connect, (user) => {
            expect(user).toBeDefined();
            done();
        });
    });
    afterAll(() => {
        client.close(); // Close the WebSocket connection
    });
});

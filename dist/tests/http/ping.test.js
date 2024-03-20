"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables from .env file 
describe('ping', () => {
    const API_URL = process.env.API_URL;
    if (!API_URL)
        throw new Error("URL is not defined in .env file");
    it('ping api', (done) => {
        expect.assertions(1);
        axios_1.default.get(`${API_URL}/ping`, {}).then((response) => {
            expect(response.data).toBeDefined();
            done();
        });
    });
});

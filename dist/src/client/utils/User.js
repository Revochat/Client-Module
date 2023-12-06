"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const User_1 = require("../obj/User/User");
class User {
    constructor(socket, options) {
        this.socket = socket;
        this.options = options;
    }
    addFriend(data) {
        return User_1.UserObject.addFriend(this.socket, data, this.options.debug);
    }
}
exports.User = User;

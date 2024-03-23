"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserObject = void 0;
const EventList_1 = require("../../utils/EventList");
const axios_1 = __importDefault(require("axios"));
class UserObject {
    static addFriend(socket, data, debug = false) {
        return new Promise((resolve, reject) => {
            socket.emit(EventList_1.EventList.User.AddFriend, data);
            socket.once(EventList_1.EventList.User.AddFriend, (data) => {
                if (debug)
                    console.log("[DEBUG] USER ADD FRIEND: " + data);
                if (data.error)
                    return reject(data.error);
                resolve();
            });
            socket.once("error", (error) => {
                if (debug)
                    console.log("[DEBUG] ERROR: " + error);
                reject(error);
            });
        });
    }
    static removeFriend(socket, data, debug = false) {
        return new Promise((resolve, reject) => {
            socket.emit(EventList_1.EventList.User.RemoveFriend, data);
            socket.once(EventList_1.EventList.User.RemoveFriend, (data) => {
                if (debug)
                    console.log("[DEBUG] USER REMOVE FRIEND: " + data);
                if (data.error)
                    return reject(data.error);
                resolve();
            });
            socket.once("error", (error) => {
                if (debug)
                    console.log("[DEBUG] ERROR: " + error);
                reject(error);
            });
        });
    }
    static uploadFile(serverUrl, token, userId, formData, debug = false) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const url = `${serverUrl}/uploads/avatar/${userId}`;
            try {
                const response = yield axios_1.default.post(url, formData, {
                    headers: Object.assign(Object.assign({}, formData.getHeaders()), { 'Authorization': `Bearer ${token}` })
                });
                if (debug)
                    console.log("[DEBUG] UPLOAD FILE: " + response.data);
                if (response.data.link)
                    resolve(serverUrl + response.data.link);
            }
            catch (error) {
                if (debug)
                    console.log("[DEBUG] ERROR: " + error);
                reject(error);
            }
        }));
    }
    static setAvatar(serverUrl, token, userId, formData, debug = false) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uploadStatus = yield this.uploadFile(serverUrl, token, userId, formData, debug);
                if (!uploadStatus)
                    return reject("Upload failed");
                return resolve(uploadStatus);
            }
            catch (error) {
                if (debug)
                    console.log("[DEBUG] ERROR: " + error);
                reject(error);
            }
        }));
    }
    static getChannels(socket, debug = false) {
        return new Promise((resolve, reject) => {
            socket.emit(EventList_1.EventList.User.GetChannels);
            socket.once(EventList_1.EventList.User.GetChannels, (data) => {
                if (debug)
                    console.log("[DEBUG] USER GET CHANNELS: " + data);
                if (data.error)
                    return reject(data.error);
                resolve(data.channels);
            });
            socket.once("error", (error) => {
                if (debug)
                    console.log("[DEBUG] ERROR: " + error);
                reject(error);
            });
        });
    }
    static getFriendsList(socket, debug = false) {
        return new Promise((resolve, reject) => {
            socket.emit(EventList_1.EventList.User.GetFriendsList);
            socket.once(EventList_1.EventList.User.GetFriendsList, (data) => {
                if (debug)
                    console.log("[DEBUG] USER GET FRIENDS LIST: " + data);
                if (data.error)
                    return reject(data.error);
                resolve(data.friends);
            });
            socket.once("error", (error) => {
                if (debug)
                    console.log("[DEBUG] ERROR: " + error);
                reject(error);
            });
        });
    }
    static GetFriendsReceivedList(socket, debug = false) {
        return new Promise((resolve, reject) => {
            socket.emit(EventList_1.EventList.User.GetFriendsReceivedList);
            socket.once(EventList_1.EventList.User.GetFriendsReceivedList, (data) => {
                if (debug)
                    console.log("[DEBUG] USER GET FRIENDS RECEIVED LIST: " + data);
                if (data.error)
                    return reject(data.error);
                resolve(data.friends_received);
            });
            socket.once("error", (error) => {
                if (debug)
                    console.log("[DEBUG] ERROR: " + error);
                reject(error);
            });
        });
    }
}
exports.UserObject = UserObject;

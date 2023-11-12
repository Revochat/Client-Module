"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emit = void 0;
class Emit {
    static emit(socket, event, ...args) {
        socket.emit(event, ...args);
    }
}
exports.Emit = Emit;

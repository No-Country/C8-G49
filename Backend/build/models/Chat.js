"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ChatSchema = new mongoose_1.Schema({
    message: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    from: {
        type: String,
        required: true,
        trim: true
    },
    received: {
        type: Boolean
    }
});
module.exports = (0, mongoose_1.model)("Chat", ChatSchema);

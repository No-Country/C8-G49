import { Schema, model } from 'mongoose'

const ChatSchema = new Schema({

    message: {
        type: String,
        required: true,
        trim: true
    },

    user: {
        type: Schema.Types.ObjectId,
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
})

module.exports = model("Chat", ChatSchema);
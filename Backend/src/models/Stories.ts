import { Schema, model } from 'mongoose'

const StorySchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
})

module.exports = model('Story', StorySchema)
// // import mongoose
const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dataFormat');

const ReactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);
// Thought model contains:
const ThoughtSchema = new Schema({
    // thoughtText: string, required, be between 1 and 280 characters
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },

    // createdAt: date, set default value to current timestamp, use getter method to format the timestamp on query
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },

    // username: string, required
    username: {
        type: String,
        required: true
    },
    // reactions: [array of nested documents created with the reactionSchema]
        reactions: [ReactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
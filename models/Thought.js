// // import mongoose
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dataFormat');

// Thought model contains:
const ThoughtSchema = new Schema({
    // thoughtText: string, required, be between 1 and 280 characters
    thoughtText: {
        type: String,
    },

    // createdAt: date, set default value to current timestamp, use getter method to format the timestamp on query
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },

    // username: string, required
    username: {
        type: String
    },
    // reactions: [array of nested documents created with the reactionSchema]
    //     reactions: []
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
// import mongoose
const { Schema, model } = require('mongoose');

// User model contains:
const UserSchema = new Schema({
// username: string, unique, required, trimmed
    username: {
        type: String,
    },
// email: string, unique, match valid address
    email: {
        type: String,
    },
// thoughts: array of _id values referencing Thought model
    thoughts: [],
// friends: array of _id values referencing the User model (self reference)
    friends: []
});

const User = model('User', UserSchema);

module.exports = User;
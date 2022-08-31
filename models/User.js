// import mongoose
const { Schema, model } = require('mongoose');

// const friendSchema = new Schema({

// })
// User model contains:
const UserSchema = new Schema({
    // username: string, unique, required, trimmed
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    // email: string, unique, match valid address
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please provide a valid email address.']
    },
    // thoughts: array of _id values referencing Thought model
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    // friends: array of _id values referencing the User model (self reference)
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;
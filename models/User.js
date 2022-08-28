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
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    // friends: array of _id values referencing the User model (self reference)
    friends: []
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
const { User } = require('../models');

const userController = {
    // GET all users
    getAllUser(req, res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    // GET single user by _id populated thought and friend data
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    // POST a new user
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbPizzaData))
        .catch(err => res.json(err));
    },

    // PUT to update a user by its _id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).josn({ message: 'No user found with this id :)' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err))
    },

    // DELETE to remove suer by its _id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id :)' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    }
};

module.exports = userController;
const router = require('express').Router();

// /api/users
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controllers');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser)

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .router('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)


// /api/users/:userId/friends/:friendId

    // POST to add a new friend to a user's friend list

    // DELETE to remove a friend from a user's friend list


// /api/thoughts

    // GET to get all thoughts

    // GET to get a single thought by its _id

    // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

    // PUT to update a thought by its _id

    // DELETE to remove a thought by its _id


// /api/thoughts/:thoughId/reactions

    // POST to create a reaction stored in a single thought's reactions array field

    // DELETE to pull and remove a reaction by the reaction's reacitonId value


module.exports = router;
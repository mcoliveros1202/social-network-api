const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controllers');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser)

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

    
    // /api/users/:userId/friends/:friendId
    router
    .route('/:userId/friends/:friendId')
    // POST to add a new friend to a user's friend list
    .post(addFriend)
    // DELETE to remove a friend from a user's friend list
    .delete(removeFriend)



module.exports = router;
const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controllers');



// /api/thoughts/:userId with addThought() method as POST callback
router
.route('/')
.get(getAllThought)
.post(addThought);

// /api/thoughts/:thoughtId with removeThought() method as DELETE callback
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
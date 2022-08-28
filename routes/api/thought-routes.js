const router = require('express').Router();
const { addThought, removeThought } = require('../../controllers/thought-controllers');

// /api/thoughts/:userId with addThought() method as POST callback
router.route('/:userId').post(addThought);

// /api/thoughts/:userId/:thoughtId with removeThought() method as DELETE callback
router.route('/:userId/:thoughtId').delete(removeThought);

module.exports = router;
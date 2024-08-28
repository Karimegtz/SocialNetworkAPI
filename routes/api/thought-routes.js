const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(getThoughts).post(createThought); //api for thoughts


router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);  // api para id de though



router.route('/:thoughtId/reactions').post(addReaction);



router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;

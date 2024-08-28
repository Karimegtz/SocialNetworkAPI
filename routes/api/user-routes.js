const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

router.route('/').get(getUsers).post(createUser); //api >usuario 

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser); //api >users >userid



router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend); //friend id api

module.exports = router;

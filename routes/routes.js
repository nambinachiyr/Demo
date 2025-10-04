const express = require('express');
const {
  getAll,
  createPost,
  gteByID,
  upPost,
  deletePost,
} = require('../control/controller');
const {isAuthenticated,allowUser} = require('../middleWare/auth');

const router = express.Router();

router.get('/', isAuthenticated, getAll);
router.post('/', isAuthenticated,createPost)
  router.get('/:id', gteByID)
  router.put('/:id', upPost)
  router.delete('/:id',isAuthenticated,allowUser(["admin"]), deletePost);
module.exports = router;

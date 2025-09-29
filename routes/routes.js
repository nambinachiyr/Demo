const express = require('express');
const {
  getAll,
  createPost,
  gteByID,
  upPost,
  deletePost,
} = require('../control/controller');
const isAuthenticated = require('../middleWare/auth');

const router = express.Router();

router.get('/', isAuthenticated, getAll);
router.post('/', createPost),
  router.get('/:id', gteByID),
  router.put('/:id', upPost),
  router.delete('/:id', deletePost);
module.exports = router;

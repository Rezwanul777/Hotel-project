const express = require('express');
const { createComment, totalComment } = require('../controllers/commentController');
const router = express.Router();



router.post('/create-comment',createComment)
router.get('/',totalComment)








module.exports = router;
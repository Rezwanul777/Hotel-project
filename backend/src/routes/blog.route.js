const express = require('express')
const {  createBlog, getAllBlogs, getSinglePost, updateBlog, deleteBlog, getRelatedBlogs } = require('../controllers/blogController');
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

const router = express.Router()



router.post('/create-blog',verifyToken,isAdmin, createBlog)
router.get('/', getAllBlogs)
router.get('/:id', getSinglePost)
router.put('/update-blog/:id',verifyToken, updateBlog)
router.delete('/:id',verifyToken, deleteBlog)
router.get('/related/:id', getRelatedBlogs)


module.exports = router;
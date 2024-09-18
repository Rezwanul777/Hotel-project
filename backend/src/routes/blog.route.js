const express = require('express')
const {  createBlog, getAllBlogs, getSinglePost, updateBlog, deleteBlog, getRelatedBlogs } = require('../controllers/blogController');

const router = express.Router()



router.post('/create-blog', createBlog)
router.get('/', getAllBlogs)
router.get('/:id', getSinglePost)
router.put('/update-blog/:id', updateBlog)
router.delete('/:id', deleteBlog)
router.get('/related/:id', getRelatedBlogs)


module.exports = router;
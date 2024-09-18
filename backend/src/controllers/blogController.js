const mongoose = require('mongoose');
const Blog = require('../model/blog.model');

//create blogs
 exports. createBlog = async (req, res) => {
    try {
        const { title, content, category, coverImg, } = req.body;

        // console.log("UserId: ", req.userId)
        const newPost = new Blog({
            ...req.body,
            author: req.userId,
        });
        await newPost.save();
        res.status(201).send({ message: 'Post created successfully', post: newPost });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).send({ message: 'Failed to create post' });
    }
}

//get all blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const { search, category, location  } = req.query;
        // console.log(search)

        let query = {};

        if (search) {
            query = {
                ...query,
                $or: [
                    { title: { $regex: search, $options: 'i' } },
                    { content: { $regex: search, $options: 'i' } }
                ]
            };
        }

        if (category) {
            query = { ...query, category };
        }
        if (location) {
            query = { ...query, location };
        }
        const posts = await Blog.find(query).sort({ createdAt: -1 }); // Adjust populate fields as necessary
        res.status(200).send(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).send({ message: 'Failed to fetch posts' });
    }
}

exports.getSinglePost=async(req,res)=>{
    try {
        const postId = req.params.id;
        // console.log(postId)
        
        const result = await Blog.findById(postId).populate('author', 'email username');
        // console.log(post)

        if (!result) {
            return res.status(404).send({ message: 'Post not found' });
        }

        //const comments = await Comment.find({ postId: postId }).populate('user', 'username email');

        res.status(200).send({ result });
    } catch (error) {
        console.error('Error fetching post:', error);
        res.status(500).send({ message: 'Failed to fetch post' });
    }
}

// update blog
exports.updateBlog = async (req, res) => {
    try {
        const postId = req.params.id;
        // const { title, content, category } = req.body;
        const updatedPost = await Blog.findByIdAndUpdate(postId, { ...req.body }, { new: true });
        
        if (!updatedPost) {
            return res.status(404).send({ message: 'Post not found' });
        }
        
        res.status(200).send({ message: 'Post updated successfully', post: updatedPost });
    } catch (error) {
        console.error('Error fetching post:', error);
        res.status(500).send({ message: 'Failed to fetch post' });
    }
}


//delete blog

exports.deleteBlog = async (req, res) => {
    try {
        const postId = req.params.id;

        // Find and delete the blog post
        const post = await Blog.findByIdAndDelete(postId);

        if (!post) {
            return res.status(404).send({ message: 'Post not found' });
        }

        // Delete associated comments
        //await Comment.deleteMany({ postId: postId });

        res.status(200).send({ message: 'Post and associated comments deleted successfully' });
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).send({ message: 'Failed to delete post' });
    }
}


//related blogs

exports.getRelatedBlogs = async (req, res) => {
    try {
        const { id } = req.params;
    
        // Check if id is defined
        if (!id) {
          return res.status(400).send({ message: 'Blog ID is required' });
        }
    
        const blog = await Blog.findById(id);
    
        if (!blog) {
          return res.status(404).send({ message: 'Blog post not found' });
        }
    
        // Create a regex to match similar titles
        const titleRegex = new RegExp(blog.title.split(' ').join('|'), 'i');
    
        const relatedQuery = {
          _id: { $ne: id }, // Exclude the current blog post
          title: { $regex: titleRegex } // Match similar titles
        };
    
        const relatedPosts = await Blog.find(relatedQuery);
    
        res.status(200).send(relatedPosts);
      } catch (error) {
        console.error('Error fetching related posts:', error);
        res.status(500).send({ message: 'Failed to fetch related posts' });
      }
}
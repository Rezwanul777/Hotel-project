const Comment = require("../model/comment.model");


exports.createComment=async(req,res)=>{
    try {
        
        //const { comment, postId, user } = req.body;
        const newComment = new Comment(req.body);
        await newComment.save()
        res.status(201).send({ message: 'Comment posted successfully', comment: newComment });
    } catch (error) {
        console.error('Error posting comment:', error);
        res.status(500).send({ message: 'Failed to post comment' });
    }
}

exports.totalComment=async(req,res)=>{
    try {
        const totalComments = await Comment.countDocuments({});
        res.status(200).send({ totalComments });
    } catch (error) {
        console.error('Error fetching total comments:', error);
        res.status(500).send({ message: 'Failed to fetch total comments' });
    }
}
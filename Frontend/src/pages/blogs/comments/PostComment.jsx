import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { usePostCommentMutation } from '../../../redux/features/comment/commentApi';
import { useFetchBlogByIdQuery } from '../../../redux/features/blogs/blogApi';
import { toast } from 'react-toastify';

const PostComment = () => {
    const { id } = useParams();
    const navigate=useNavigate();
    const [comment, setComment] = useState('');
    const {user}=useSelector((state)=>state.auth)
    const [postComment]=usePostCommentMutation()
    // refetching afer comments
  const { refetch } = useFetchBlogByIdQuery(id, {
    skip: !id, // Skip fetching if id is not available
  });

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!user) {
          toast.error('You must be logged in to post a comment');
          navigate('/login');
          return;
      }
      const newComment = {
        comment: comment,
        user: user?._id,
        postId: id
      }

      try {
        const response= await postComment(newComment).unwrap(); 
        toast.success('Comment posted successfully!')
        setComment('');
        refetch();  // refetching comments after comment is posted 
      } catch (error) {
        toast.error(err.message);
      }
  
    }

    
    


  return (
    <div className='mt-8'>
    <h3 className="text-lg font-medium mb-8">Leave a Comment</h3>
    <form onSubmit={handleSubmit}>
        <textarea 
         value={comment} 
         onChange={(e) => setComment(e.target.value)}
        name="text" id="text" cols="30" rows="10" 
        className='w-full bg-bgPrimary focus:outline-none p-5'
        placeholder='Share your opinion about this post....'
        />
        <button type="submit" className='w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md'>Submit</button>      
    </form>
</div>
  )
}

export default PostComment
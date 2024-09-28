import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const PostComment = () => {
    const { id } = useParams();
    const [comment, setComment] = useState('');
  return (
    <div className='mt-8'>
    <h3 className="text-lg font-medium mb-8">Leave a Comment</h3>
    <form >
        <textarea 
         value={comment} 
         //onChange={(e) => setComment(e.target.value)}
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
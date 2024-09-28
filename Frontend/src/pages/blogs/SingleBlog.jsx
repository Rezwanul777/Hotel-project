import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchBlogByIdQuery } from '../../redux/features/blogs/blogApi'
import SingleBlogCard from './SingleBlogCard'
import CommentCard from './comments/commentCard'
import RelatedBlogs from './RelatedBlogs'

const SingleBlog = () => {
    const {id}=useParams()
  const {data:blog,isLoading,error}=useFetchBlogByIdQuery(id)
    
  return (
    <div className='text-primary mt-8 container mx-auto px-8'>
        <div>
            {isLoading && <div className='text-blue-600 text-2xl'>Loading...</div>}
            {error && <div className='text-orange-600 text-2xl'>sometehing went wrong...</div>}
            {
                blog?.post &&(
                    <div className='flex flex-col md:flex-row justify-between items-start md:gap-12 gap-8'>
                        <div className='lg:w-2/3 w-full'>
                        <SingleBlogCard blog={blog?.post} />
                       <CommentCard comments={blog?.comments}/>
                        </div>
                        <div className=' bg-white lg:w-1/3 w-full'><RelatedBlogs/></div>
                    </div>
                )
            }
        </div>
    </div> 
  ) 
}

export default SingleBlog
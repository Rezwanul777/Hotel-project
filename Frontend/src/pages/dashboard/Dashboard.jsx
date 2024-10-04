import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaBlog, FaRegComment } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";
import { useFetchBlogsQuery } from '../../redux/features/blogs/blogApi';
import { useGetCommentsQuery } from '../../redux/features/comment/commentApi';
import { useGetUserQuery } from '../../redux/features/auth/authApi';
import BlogCharts from './BlogCharts';


const Dashboard = () => {
  const{user}=useSelector((state)=>state.auth)
  const [query, setQuery] = useState({ search: '', category: '' });
  const {data:blogs=[],isLoading}=useFetchBlogsQuery(query)
  const { data: comments = [] } = useGetCommentsQuery()
// Calculate the number of "admin" role
const { data: users = [] } = useGetUserQuery();
const adminCount = users.filter(user => user.role === "admin").length;

  
  
  return (
    <>
    {isLoading && <div>Loading...</div>}
      <div className='space-y-6'>
        <div className='bg-bgPrimary p-5'>
        <h1>Hi, admin {user?.username}</h1>
          <p>Welcome to the admin dashboard</p>
          <p>
            Here you can manage your hotel's posts, manage rooms, and other
            administrative tasks.
          </p>
        </div>
        {/* card display */}
        <div className='flex flex-col md:flex-row gap-8 justify-center '>
          <div className='bg-indigo-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center'>
            <FiUsers className='size-8 text-indigo-600'/>
            <p>{users.length} Users</p>
          </div>
          <div className="bg-red-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
            <FaBlog className="size-8 text-red-600" />
            <p>{blogs?.length} Blogs</p>
          </div>
          <div className="bg-lime-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
            <RiAdminLine className="size-8 text-lime-600" />
            <p>{adminCount} Admin{adminCount !== 1 ? 's' : ''}</p>
          </div>
          <div className="bg-orange-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
            <FaRegComment className="size-8 text-orange-600" />
            <p>{comments?.totalComments} Comments</p>
          </div>
        </div>
        {/* charts */}
        <BlogCharts blogs={blogs}/>
      </div>
    </>
  )
}

export default Dashboard
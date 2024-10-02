import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'
import AdminNavigation from './AdminNavigation'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const AdminLayOut = () => {
    const { user } = useSelector((state) => state.auth);
    if (!user || user?.role !== 'admin') {
        toast.error("You must be a admin!")
        // Redirect to home or login if the user is not an admin
        return <Navigate to="/login" />;
      }
  return (
    <div className='container px-4 mx-auto flex flex-col md:flex-row gap-4 items-start justify-start'>
      
      <header className='lg:w-1/5 sm:2/5 w-full'>
        <AdminNavigation/>
      </header>
      <main className='p-8 bg-white w-full'>
      <p>Admin content</p>
        <Outlet /> 
      </main>
    </div>
  )
}

export default AdminLayOut